<template>
    <div ref="root">

    </div>
</template>
<script>
import { ref, onMounted, defineComponent } from 'vue'
export default {
    setup () {
        const root = ref(null);

        onMounted (() => {
            console.log('====>>>root', root.value);
        })
        return {
            root
        }
    }
}
</script>
<style scoped>

</style>
