<template>
    <router-view></router-view>
</template>

<script setup lang='ts'>
import { GlobalStore } from './store/globalState';
import { ChatStore } from './store/chatState'
import { computed, getCurrentInstance, inject, onMounted, onUnmounted, provide, Ref, ref, watch } from "vue";
import { io, Socket } from 'socket.io-client'
import { storeToRefs } from 'pinia';
import { ElMessage } from 'element-plus';

const globalState = GlobalStore();
const chatState = ChatStore();

const { token, socketId } = storeToRefs(globalState)

const connect = computed(() => {
    if (socketId.value || token.value) {
        return true
    }
})

const socket = ref()
provide('socket', socket)

watch(connect, () => {
    // 连接
    console.log(connect);

    if (connect.value) {
        socket.value = io('http://127.0.0.1:3000', {
            auth: {
                token: globalState.token
            }
        })

        //连接成功
        socket.value.on("connect", () => {
            console.log(socket.value.id) // x8WIv7-mJelg7on_ALbx
            globalState.setSocketId(socket.value.id)
            //监听消息
            socket.value.on('sendMessage', (data: any, cb: Function) => {
                console.log(data)
                if (data) {
                    chatState.setNewMessage(globalState.userInfo.id!, data.fromId, data)
                    cb(true)
                }
            })
        });

        socket.value.on("disconnect", () => {
            console.log('/////////discone');
            globalState.socketId = ''
            if (!socket.value.connected && globalState.token) {
                socket.value.connect()
            }
        })

        //监听异常
        socket.value.on("exception", (err: any) => {
            console.log(err);
        })


    }
}, { immediate: true })



onMounted(() => {
    console.log('mounted');

})
onUnmounted(() => {
    console.log('unmoundted');

})



</script>

<style>
body,
html,
#app {
    width: 100%;
    height: 100%;
}


::-webkit-scrollbar {
    width: 6px
}

::-webkit-scrollbar:horizontal {
    height: 6px
}

::-webkit-scrollbar-track {
    border-radius: 10px
}

::-webkit-scrollbar-thumb {
    background-color: #0003;
    border-radius: 10px;
    transition: all .2s ease-in-out
}

::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
    background-color: #0000004d
}
</style>
