<template>
  <fieldset>
    <legend>演示-提交表单</legend>

    <button @click="handleShowModal">显示弹框</button>
  </fieldset>

  <fieldset>
    <legend>演示-i18n切换</legend>
    <button @click="handleShowModal2">显示弹框</button>
  </fieldset>

  <fieldset>
    <legend>演示-API调用弹框，点击“确定”事件是异步事件</legend>
    <button @click="handleShowModal3">显示弹框</button>
  </fieldset>

  <fieldset>
    <legend>演示-API调用弹框，使用 h 函数</legend>
    <button @click="handleShowModal4">显示弹框</button>
  </fieldset>

  <fieldset>
    <legend>演示-API调用弹框，使用 jsx 语法</legend>
    <button @click="handleShowModal5">显示弹框</button>
  </fieldset>

  <a-button type="primary">这是一个按钮</a-button>
  <a-icon type="form" />
  <a-switch default-checked @change="onChange" />


</template>

<script lang="tsx">
import { defineComponent, getCurrentInstance, reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import useGlobal from '@/hooks/useGlobal';
import { sleep } from '@/utils';
import { Button, Switch } from 'ant-design-vue';
import  Form from '@ant-design/icons-vue';
export default defineComponent({
  name: 'Home',
  components: {
    Button,
    Form,
    ASwitch: Switch
  },
  setup() {
    const { locale } = useI18n();
    const { $modal } = useGlobal();
    //#region 演示-提交表单
    const show = ref<boolean>(false); //响应式boolean值
    const form = reactive({ //响应式对象
      account: '',
      password: '',
      loading: false
    });
    const handleConfirm = async () => { //确定回调
      form.loading = true;
      await sleep(1000);
      form.loading = false;
      show.value = false;
      console.log('提交成功');
    };
    const lang = ref<string>(localStorage.getItem('lang') || 'zh-CN');
    const handleShowModal = () => {
      show.value = true;
    };
    //#endregion
    //#region 演示-i18n切换
    const handleShowModal2 = () => {
      $modal.show({
        title: '演示-i18n切换',
        content() {
          return (
            <select v-model={lang.value}>
              <option value="zh-CN">简体</option>
              <option value="zh-TW">繁体</option>
              <option value="en-US">英语</option>
            </select>
          );
        },
        onConfirm() {
          console.log('点击确定');
        },
        onCancel() {
          console.log('点击取消');
        }
      });
    };
    watch(lang, val => {
      locale.value = val;
      localStorage.setItem('lang', val);
    });
    //#endregion
    //#region 演示-API调用弹框，点击“确定”事件是异步事件
    const handleShowModal3 = () => {
      $modal.show({
        title: '演示-API调用弹框',
        maskClose: true,
        opacity: 0.9,
        content: 'hello world ~',
        async onConfirm() {
          console.log('点击确定 before');
          await sleep(2000);
          console.log('点击确定 after');
        }
      });
    };
    //#endregion
    //#region 演示-API调用弹框，使用 h 函数
    const handleShowModal4 = () => {
      $modal.show({
        title: '演示-API调用弹框',
        content(h: any) {
          return h(
            'div',
            {
              style: 'color:red;',
              onClick: ($event: Event) => console.log('clicked', $event.target)
            },
            'hello world ~'
          );
        }
      });
    };
    //#endregion
    //#region 演示-API调用弹框，使用 jsx 语法
    const handleShowModal5 = () => {
      $modal.show({
        title: '演示-API调用弹框',
        content() {
          return (
            <div
              onClick={($event: Event) => console.log('clicked', $event.target)}
            >
              hello world ~
            </div>
          );
        }
      });
    };
    const onChange = () => {

    };
    //#endregion
    return {
      show,
      form,
      handleShowModal,
      handleConfirm,
      lang,
      handleShowModal2,
      handleShowModal3,
      handleShowModal4,
      handleShowModal5,
      onChange
    };
  }
});
</script>

<style lang="less" scoped>
fieldset {
  margin-bottom: 50px;
}
input {
  box-sizing: border-box;
  display: block;
  width: 100%;
}
</style>