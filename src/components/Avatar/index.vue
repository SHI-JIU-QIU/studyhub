<template>
    <div>
        <div class=" ">
            <el-popover placement="top" :width="240" trigger="hover">
                <template #reference>
                    <el-avatar :size="46" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                </template>

                <div class="my-info-box">
                    <div class="box-header">
                        <div class="header-item">
                            <span>211</span>
                            <span>关注</span>
                        </div>
                        <div class="header-item">
                            <span>211</span>
                            <span>帖子</span>
                        </div>
                        <div class="header-item">
                            <span>211</span>
                            <span>粉丝</span>
                        </div>
                    </div>
                    <div class="box-body">
                        <div class="hvr-icon-forward hvr-sweep-to-right ">

                            <el-icon size="20">
                                <User />
                            </el-icon>

                            <span class="pl-2">个人中心</span>
                            <el-icon size="12" class="hvr-icon">
                                <ArrowRightBold />
                            </el-icon>

                        </div>
                        <div class="hvr-icon-forward hvr-sweep-to-right ">

                            <el-icon size="20">
                                <Ticket />
                            </el-icon>
                            <span class="pl-2">我的订单</span>


                            <el-icon size="12" class="hvr-icon">
                                <ArrowRightBold />
                            </el-icon>
                        </div>
                        <div class="hvr-icon-forward hvr-sweep-to-right ">

                            <el-icon size="20">
                                <SwitchButton />
                            </el-icon>
                            <span class="pl-2" @click="exit">退出登录</span>


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
import { GlobalStore } from '@/store/globalState';
import { User, ArrowRightBold, Ticket, SwitchButton } from '@element-plus/icons-vue'
import { Socket } from 'socket.io-client';
import { getCurrentInstance, inject, onMounted, Ref } from 'vue';


const globalState = GlobalStore()
let socket:any = ''
const exit = () => {
    globalState.token = ''
    globalState.socketId = ''
    globalState.userInfo = {}
    socket.value.disconnect()
}


onMounted(() => {
    socket = inject<Socket>('socket')!
    console.log(socket,'--------------');
    
})



</script>

<style scoped lang="less">
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

.my-info-box {
    padding: 12px;

    .box-header {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 20px;


        .header-item {
            display: flex;
            flex-direction: column;
            align-items: center;

            span:nth-child(1) {
                font-size: 16px;
            }

            span:nth-child(2) {
                font-size: 12px;
            }
        }
    }

    .box-body {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &>div {
            flex: 1;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
    }
}
</style>