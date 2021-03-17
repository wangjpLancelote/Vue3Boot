declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module '*.vue' {
  import { Component } from 'vue';
  let component: Component;
  export default component;
}