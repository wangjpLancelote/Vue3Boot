import { ComponentInternalInstance } from 'vue';
import { IModal } from './modal.type'

declare global {
    interface IGlobalAPI {
        $modal: IModal; // declare 全局声明$modal
        $request: any; // 其他声明

    }

    interface ICurrentInstance extends ComponentInternalInstance {
        appContext: {
            config: { globalProperties: IGlobalAPI };
        }
    }
}

export {};