<template>
    <div>
        <el-button ref="searchButtonRef" :icon="Search" color="#ffd04b" round size="large" 
           class="w-100px" >搜索</el-button>
    </div>
</template>

<script setup lang='ts' name="SearchBtn">
import { Search } from '@element-plus/icons-vue'

const emit = defineEmits(['componentLeave'])

</script>

<style scoped>

</style>