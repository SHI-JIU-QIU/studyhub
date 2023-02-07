<template>
    <div>
        <el-button ref="searchButtonRef" :icon="Search" round size="large" class="SearchBtn">搜索</el-button>
    </div>
</template>

<script setup lang='ts' name="SearchBtn">
import { Search } from '@element-plus/icons-vue'

const emit = defineEmits(['componentLeave'])

</script>

<style scoped>
.SearchBtn {
    background-color: #ffc524;
    color: black;
    border:0;
    margin-right: calc(226px - 88px);
}
</style>