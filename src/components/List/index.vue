<template>
    <div class="list">
        <div class="post-title">{{props.title}}</div>
        <ul>
          <slot name="content"></slot>
        </ul>
    </div>
</template>

<script setup lang='ts' name="List">
import { reactive, ref } from 'vue';

interface Props {
    title:string
}

const props = defineProps<Props>()


</script>

<style scoped lang="less">
.list {
    background-color: #fff;
    width: 240px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: var(--el-box-shadow-light);


    .post-title {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        background-color: #ffc524;
    }

    ul li {
        height: 30px;

        a {
            text-align: center;
            line-height: 30px;
            display: block;
            height: 100%;
        }
    }
}
</style>