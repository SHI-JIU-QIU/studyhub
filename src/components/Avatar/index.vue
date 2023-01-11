<template>
    <div>
        <div class="flex flex-col justify-around ml-auto">
            <el-popover placement="top" :width="240" trigger="hover">
                <template #reference>
                    <el-avatar :size="46" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                </template>

                <div class="px-6 py-3">
                    <div class="flex justify-between ">
                        <div class="flex flex-col items-center">
                            <span class="font-700 text-base">211</span>
                            <span class="text-xs">关注</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <span class="font-700 text-base">211</span>
                            <span class="text-xs">帖子</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <span class="font-700 text-base">211</span>
                            <span class="text-xs">粉丝</span>
                        </div>
                    </div>
                    <div class="h-100px flex flex-col justify-between mt-8 ">
                        <div class="hvr-icon-forward hvr-sweep-to-right flex items-center h-100%  px-2 rounded-lg mb-2">
                            <div class="flex items-center mr-auto">
                                <el-icon size="20">
                                    <User />
                                </el-icon><span class="pl-2">个人中心</span>
                            </div>
                            <el-icon size="12" class="hvr-icon">
                                <ArrowRightBold />
                            </el-icon>

                        </div>
                        <div class="hvr-icon-forward hvr-sweep-to-right flex items-center h-100%  px-2 rounded-lg mb-2">
                            <div class="flex items-center mr-auto">
                                <el-icon size="20">
                                    <Ticket />
                                </el-icon><span class="pl-2">我的订单</span>
                            </div>

                            <el-icon size="12" class="hvr-icon">
                                <ArrowRightBold />
                            </el-icon>
                        </div>
                        <div class="hvr-icon-forward hvr-sweep-to-right flex items-center h-100% px-2 rounded-lg">
                            <div class="flex items-center mr-auto">
                                <el-icon size="20">
                                    <SwitchButton />
                                </el-icon><span class="pl-2">退出登录</span>
                            </div>

                            <el-icon size="12" class="hvr-icon">
                                <ArrowRightBold />
                            </el-icon>
                        </div>
                    </div>
                </div>
            </el-popover>
        </div>
    </div>
</template>

<script setup lang='ts'>
import {User,ArrowRightBold,Ticket,SwitchButton} from '@element-plus/icons-vue'

</script>

<style scoped>
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

</style>