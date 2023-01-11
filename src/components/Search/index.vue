<template>
    <transition mode="out-in" enter-active-class="animate__animated animate__faster animate__fadeIn">

        <component :is='activeComponent' @mouseenter="componentEnter" @componentLeave="componentLeave"></component>

    </transition>

</template>

<script setup lang='ts'>
import { shallowRef } from 'vue';
import SearchBtn from "./SearchBtn/index.vue";
import SearchInput from "./SearchInput/index.vue";



const activeComponent = shallowRef(SearchBtn)


const exchangeComponent = () => {
    activeComponent.value = activeComponent.value == SearchBtn ? SearchInput : SearchBtn;
}

const componentEnter = () => {
    if (activeComponent.value == SearchBtn) {
        exchangeComponent()
    }
}


const componentLeave = (keyword?: string) => {
    if (keyword?.trim() == '') {
        exchangeComponent()
    }

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