import { ref, onMounted, defineComponent, h } from 'vue';
export default {
    setup() {
        const root = ref(null);
        return () => {
            h('div', {
                ref: root
            })
            return () => <div ref={root}/>;
        }
    }
}