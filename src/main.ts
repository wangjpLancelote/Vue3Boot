import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

import i18n from '@/locale/index';
import Modal, { IConfig } from '@/plugins/modal';
import { Button, message, Icon } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'normalize.css';
import * as Icons from '@ant-design/icons-vue';
const icons: any = Icons;


const app = createApp(App);

app.use(Modal as any, { style: { opacity: 0.5 }, props: { close: false, maskClose: false } } as IConfig); // 初始化样式,手写模态框

app.use(router);
app.use(store);
app.use(i18n);

app.use(Button);
app.use(Icon);
app.config.globalProperties.$message = message;
//#app.component(); //全局注册组件
for (const icon in icons) {
    if (!icon) {
        continue;
    }
    app.component(icon, icons[icon]);
}

app.mount('#app');

