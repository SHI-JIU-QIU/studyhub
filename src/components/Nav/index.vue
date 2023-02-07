<template>
    <div class="nav">
        <el-menu :default-active="activeIndex" class="menu" mode="horizontal" :ellipsis="false" @select="handleSelect"
            text-color="#000" active-text-color="#ffd04b">
            <el-menu-item index="1">
                <div class="hvr-icon-bob ">
                    <el-icon class="hvr-icon" color="black " :size=24>
                        <House />
                    </el-icon>
                </div>
            </el-menu-item>
            <el-menu-item index="2">
                <div class="hvr-icon-bob ">
                    <el-icon class="hvr-icon" color="black" :size=24>
                        <HelpFilled />
                    </el-icon>

                </div>
            </el-menu-item>
            <el-menu-item index="3">
                <div class="hvr-icon-bob ">
                    <el-icon class="hvr-icon" color="black" :size=24>
                        <Star />
                    </el-icon>

                </div>
            </el-menu-item>
            <el-menu-item index="4">
                <div class="hvr-icon-bob ">
                    <el-icon class="hvr-icon" color="black" :size=24>
                        <ChatDotRound />
                    </el-icon>

                </div>
            </el-menu-item>
            <el-menu-item index="5">
                <div class="hvr-icon-bob ">
                    <el-icon class="hvr-icon" color="black" :size=24>
                        <Goods />
                    </el-icon>
                </div>
            </el-menu-item>
        </el-menu>

    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, shallowRef } from 'vue'
import { House, HelpFilled, Star, ChatDotRound, Goods } from '@element-plus/icons-vue'


const activeIndex = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped lang="less">
.nav {
    height: 100%;

    .menu {
        height: 100%;
        border: 0;
        background-color: transparent;

        .el-menu-item {
            width: 100px;

            &:hover {
                background-color: transparent !important;
            }
        }
    }

    .is-active {
        background-color: transparent !important;
    }
}





// .el-icon {
//     margin: 0;
// }



// .hvr-icon-bob,
// .hvr-icon-forward {
//     display: flex;
// }

// .hvr-sweep-to-right::before {
//     background-color: rgb(231, 231, 231);
//     border-radius: 0.5rem;
// }

// .hvr-sweep-to-right:hover,
// .hvr-sweep-to-right:focus,
// .hvr-sweep-to-right:active {
//     color: #000;
// }


</style>