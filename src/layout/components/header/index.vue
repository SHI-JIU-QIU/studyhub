<template>
    <div ref="headerRef" class="fix">
        <div class="header">
            <el-icon size="24" class="menu">
                <MoreFilled />
            </el-icon>
            <Title></Title>
            <Nav class="nav"></Nav>
            <Search class="search"></Search>
            <Avatar></Avatar>
        </div>
    </div>

</template>

<script setup lang='ts'>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Title from '@/components/Title/index.vue'
import Nav from '@/components/Nav/index.vue'
import Search from '@/components/Search/index.vue'
import Avatar from '@/components/Avatar/index.vue'
import { MoreFilled } from '@element-plus/icons-vue'
import { usePageOffset } from '@/utils/usePageOffset'



//滚动时导航栏颜色变化
const headerRef = ref<HTMLElement>()
function headerColorChange(){
    if(window.pageYOffset<=200){
        headerRef.value!.style.backgroundColor="transparent"
        return
    }
    else{
        headerRef.value!.style.backgroundColor="white"
    }
}
usePageOffset(headerColorChange)








</script>

<style scoped lang="less">
.fix {
    position: fixed;
    width: 100%;
    z-index: 999;

    .header {
        box-sizing: border-box;
        width: 100%;
        padding: 0 60px;
        display: flex;
        align-items: center;
        height: 60px;
        justify-content: space-between;

        .menu {
            display: none;
        }
    }


    @media screen and (max-width:1150px) {
        .search {
            display: none;
        }

    }

    @media screen and (max-width:864px) {
        .nav {
            display: none;
        }

        .menu {
            display: block !important;
            ;
        }

    }
}
</style>