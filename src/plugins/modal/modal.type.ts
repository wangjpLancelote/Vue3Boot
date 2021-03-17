import { ComponentInternalInstance, VNode, h } from 'vue';

export interface IConfig {
    style?: {
        opacity?: number,
    };
    props?: {
        close?: boolean,
        maskClose?: boolean,
    };
}

export type IContent = string | ((h?: any) => VNode | JSX.Element); // 字符串或渲染出虚拟DOM或JSX模板

export interface IModalParams { // 参数类型接口
    title?: string;
    content: IContent;
    close?: boolean;
    maskClose?: boolean;
    opacity?: number; // 透明度
    onConfirm?: () => Promise<void> | void;
    onCancel?: () => void;
}

export interface IModal {
    show(params: IModalParams): void;
}

export interface IInstance extends ComponentInternalInstance {
    _hub: {
        t: any;
        'on-cancel': () => void;
        'on-confirm': () => void;
    };
}
