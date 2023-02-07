<template>
    <div class="layout">
        <Header></Header>
        <div class="bgimage">
            <div class="mask">HELLO WORLD</div>
        </div>
        <Main>
            <template #left>
                <Aside></Aside>
            </template>


        </Main>
    </div>
</template>

<script setup lang='ts' name="Layout">
import { throttle } from '@/utils/throttle';
import { defineAsyncComponent, onMounted, ref } from 'vue';
import type { layoutType } from './interfaces'
import Header from './components/header/index.vue'
import Main from './components/main/index.vue'
import Aside from '@/components/Aside/index.vue'







</script>

<style scoped lang="less">
.layout {
    overflow: hidden;
    .bgimage {
        width: 100%;
        height: 200px;
        background: url(@/assets/images/bg.jpg) no-repeat center center;
        background-size: cover;
        background-attachment: fixed;
        margin-bottom: 20px;

        .mask {
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.3);
            font-weight: 700;
            color: aliceblue;
            line-height: 240px;
            text-align: center;
            font-size: 40px;
        }
    }
}
</style>