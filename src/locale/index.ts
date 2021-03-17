import { createI18n } from 'vue-i18n';

import zhCN from './lang/zh-CN';
import zhUS from './lang/zh-US';
import zhTW from './lang/zh-TW';

import modal_zhCN from '@/plugins/modal/locale/lang/zh-CN';
import modal_enUS from '@/plugins/modal/locale/lang/en-US';
import modal_zhTW from '@/plugins/modal/locale/lang/zh-TW';

const messages = {
    'zh-CN': { ...zhCN, ...modal_zhCN },
    'zh-TW': { ...zhTW, ...modal_zhTW },
    'en-US': { ...zhUS, ...modal_enUS },
};

/** 创建语言版本配置 */
const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: localStorage.getItem('lang') || 'zh-CN',
    messages,
    fallbackLocale: 'zh-CN',
    silentTranslationWarn: true,
    missing() {
        return '';
    },
});

export default i18n;
