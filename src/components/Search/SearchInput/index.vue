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
:deep() .el-input-group__append {
    color: #fff;
    background-color: #ffc524;
    box-shadow: 0 0 0 0;
}

:deep() .el-input-group__prepend {
    background-color: #fff;

}

:deep() .el-input__wrapper {
    border-radius: 20px;
}
</style>