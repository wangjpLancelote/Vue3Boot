import { h } from 'vue';


/**
 * 函数式组件
 * @param { Object } props
 */
const Content = ( props: { render: (h: any) => void } ) => props.render(h);

Content.props = ['render'];
export default Content;
