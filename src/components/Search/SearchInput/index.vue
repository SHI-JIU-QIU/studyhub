<template>
    <div>
        <el-input ref="searchInputRef" :prefix-icon="Search" size="large"  v-model="searchKeyword"
            @mouseleave="componentLeave"></el-input>
    </div>
</template>

<script setup lang='ts' name="SearchInput">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';

const emit = defineEmits(['componentLeave'])

const searchKeyword = ref('')

const componentLeave = () => {
    emit('componentLeave', searchKeyword.value)
}

</script>

<style scoped>

</style>