<template>
    <div class="h-full">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect" background-color="#fff" text-color="#000" active-text-color="#ffd04b">
            <el-menu-item index="1">
                <div class="hvr-icon-bob w-full h-full flex  items-center justify-center">
                    <el-icon class="hvr-icon" color="black " :size=24>
                        <House />
                    </el-icon>
                 
                </div>
            </el-menu-item>
            <el-menu-item index="2">
                <div class="hvr-icon-bob w-full h-full flex  items-center justify-center">
                    <el-icon class="hvr-icon" color="black" :size=24>
                        <HelpFilled />
                    </el-icon>

                </div>
            </el-menu-item>
            <el-menu-item index="3">
                <div class="hvr-icon-bob w-full h-full flex  items-center justify-center">
                    <el-icon class="hvr-icon" color="black" :size=24>
                        <Star />
                    </el-icon>
                   
                </div>
            </el-menu-item>
            <el-menu-item index="4">
                <div class="hvr-icon-bob w-full h-full flex  items-center justify-center">
                    <el-icon class="hvr-icon" color="black" :size=24>
                        <ChatDotRound />
                    </el-icon>
                   
                </div>
            </el-menu-item>
            <el-menu-item index="5">
                <div class="hvr-icon-bob w-full h-full flex  items-center justify-center">
                    <el-icon class="hvr-icon" color="black" :size=24>
                        <Goods />
                    </el-icon>
                </div>
            </el-menu-item>
        </el-menu>

    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, shallowRef } from 'vue';
import {House,HelpFilled,Star,ChatDotRound,Goods} from '@element-plus/icons-vue'


const activeIndex = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
:deep() .el-menu-demo {
    height: 100%;
    --el-menu-hover-bg-color: rgb(255, 255, 255) !important;
    border: 0;
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
}


</style>