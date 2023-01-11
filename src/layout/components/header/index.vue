<template>
    <div class="header">
      <slot name="left"></slot>
      <slot name="middle"></slot>
      <slot name="right"></slot>

    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'




</script>

<style scoped>
.header{
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 40px 0 40px;
}




/* :deep() .el-menu-demo {
    --el-menu-hover-bg-color: rgb(255, 255, 255) !important;
    border: 0
}

.el-menu-item {
    line-height: 1.5;
    width: 100px;
}

.el-icon {
    margin: 0;
}

.el-menu-item:hover {
    background-color: #fff !important;
}

.hvr-icon-bob,
.hvr-icon-forward {
    display: flex;
}

.hvr-sweep-to-right::before {
    background-color: rgb(231, 231, 231);
    border-radius: 0.5rem;
}

.hvr-sweep-to-right:hover,
.hvr-sweep-to-right:focus,
.hvr-sweep-to-right:active {
    color: #000;
}

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
} */
</style>