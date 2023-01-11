<template>
    <div>
        <Suspense>
            <template #default>
                <component :is="layoutComponents[layout]"></component>
            </template>

            <template #fallback>
                <div>.....加载中.....</div>
            </template>

        </Suspense>
    </div>
</template>

<script setup lang='ts' name="Layout">
import { throttle } from '@/utils/throttle';
import { defineAsyncComponent, onMounted, ref } from 'vue';
import type { layoutType } from './interfaces'


const layoutComponents = {
    small: defineAsyncComponent(() => import('./LayoutSmall/index.vue')),
    medium: defineAsyncComponent(() => import('./LayoutMedium/index.vue')),
    large: defineAsyncComponent(() => import('./LayoutLarge/index.vue'))
}

let layout = ref<keyof layoutType>('large')

onMounted(() => {
    layoutSet()
})

function layoutSet() {
    const clientWidth = document.body.clientWidth

    if (clientWidth < 768) {
        layout.value = 'small'
    } else if (clientWidth < 976) {
        layout.value = 'medium'
    }
    else {
        layout.value = 'large'
    }

}

window.onresize = throttle(layoutSet, 200)




</script>

<style scoped>

</style>