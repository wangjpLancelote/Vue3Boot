import { App, createVNode, render } from 'vue';
import Modal from './Modal.vue';
import config from './config';
import { IConfig, IInstance, IModal } from './modal.type';

/** 注册组件 */
Modal.install = (app: App, options: IConfig = {}) => {
    Object.assign(config.props, options.props || {});

    app.component(Modal.name, Modal);

    app.config.globalProperties.$modal = { // 注册 全局组件对象 $modal
        show ({ title = '', content = '', close = config.props?.close,
        onConfirm , onCancel }) { // show 方法 组件显示，监听组件事件
            const container = document.createElement('div');
            const vnode = createVNode(Modal);
            render(vnode, container); // 将虚拟dom 通过渲染函数 渲染到div
            document.body.appendChild(container); // 动态的添加到body
            const instance = vnode.component as IInstance;

            const { props, _hub } = instance; // 获取实例的instance

            const _closeModal = () => {
                props.modelValue = false;
                container.parentNode?.removeChild(container); // 关闭组件,同时移除元素
            }

            Object.assign(props, {
                isTeleport: false,
                modelValue: true,
                title,
                content,
                close,
            });

            Object.assign(_hub, {
                async 'on-confirm'() { // 监听 om-confirm 组件事件
                    if (onConfirm) {
                        const fn = onConfirm();
                        if (fn && fn.then) { // 是异步操作，就显示loading
                            try {
                                props.loading = true;
                                await fn;
                                props.loading = false;
                                _closeModal();
                            } catch (e) {
                                console.error(e);
                                props.loading = false;
                            }
                        } else { // 否则 直接关闭
                            _closeModal();
                        }
                    } else {
                        _closeModal();
                    }
                },
                'on-cancel'() {
                    onCancel && onCancel();
                    _closeModal();
                },
                't': app.config.globalProperties.$t,
            });
        },
    } as IModal;
};
export { IConfig };

export default Modal;
