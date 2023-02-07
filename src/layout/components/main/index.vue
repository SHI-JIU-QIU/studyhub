<template>
    <div class="main">
       
        <slot name="left"></slot>

        <slot name="middle"></slot>

        <slot name="right"></slot>
    </div>
</template>

<script setup lang='ts' name="Main">

</script>

<style scoped lang="less">
.main {
    padding: 0px 100px;
    display: grid;
    




}
</style>