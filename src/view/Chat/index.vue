<template>
    <Main class="main">
        <template #left>
            <List title="我的聊天">
                <template #content>
                    <div class="chat-list" v-if="chatList">
                        <a href="#" class="chat-card hvr-fade" v-for="item in chatList" :key="item.id"
                            @click.prevent="setChatUser(item)">
                            <el-avatar :size="46"
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                            <div class="chat-info">
                                <span class="chat-username">{{ item.username }}</span>
                                <span class="chat-content" v-if="mychat">
                                    {{ mychat[item.id].at(-1)!.image ? '[ 图片 ]' : mychat[item.id].at(-1)!.text }}
                                </span>
                            </div>
                        </a>
                    </div>
                </template>
            </List>
        </template>

        <template #middle>
            <div class="chat-window">
                <div class="chat-user" v-if="currChatUser">{{ currChatUser.username }}</div>
                <div class="chat-detail" ref="chatbox" v-if="mychat && currChatUser">
                    <div v-for="item in mychat[currChatUser.id]" :key="item.id" style="height:fit-content;">
                        <div class="other-chat" v-if="item.fromId != globalState.userInfo.id">
                            <el-avatar :size="46"
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                            <span class="other-chat-content">
                                <el-image v-if="item.image" style="height: 100px;border-radius: 5px;" :src="item.image"
                                    fit="cover" lazy :preview-src-list="[item.image]"></el-image>
                                <span v-else>{{ item.text }}</span>
                            </span>
                        </div>
                        <div class="my-chat" v-if="item.fromId == globalState.userInfo.id">
                            <span class="my-chat-content">
                                <el-image v-if="item.image" style="height: 100px;border-radius: 5px;" :src="item.image"
                                    fit="cover" lazy :preview-src-list="[item.image]"></el-image>
                                <span v-else>{{ item.text }}</span></span>
                            <el-avatar :size="46"
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                        </div>
                    </div>

                </div>

                <div class="input-text">
                    <div class="input-header">
                        <Emoji @set-emoji="setEmoji" />

                        <el-upload class="input-pic" :show-file-list="false" :auto-upload="false" :on-change="submitPic">
                            <el-button>
                                <el-icon size="18">
                                    <Picture />
                                </el-icon>
                            </el-button>

                        </el-upload>

                    </div>
                    <div class="input-form">
                        <el-input v-model="chatContent" :rows="4" type="textarea" placeholder="Please input" />
                    </div>
                    <el-button class="submit" @click="submitText">发送</el-button>
                </div>

            </div>
        </template>

        <template #right>
            <div>

            </div>
        </template>
    </Main>
</template>

<script setup lang='ts'>
import List from '@/components/List/index.vue'
import Post from '@/components/Post/index.vue'
import Main from '@/layout/components/main/index.vue'
import Avatar from '@/components/Avatar/index.vue'
import { Picture } from '@element-plus/icons-vue'
import { io, Socket } from "socket.io-client"
import Emoji from '@/components/Emoji/index.vue'
import { computed, getCurrentInstance, inject, nextTick, onMounted, onUpdated, Ref, ref, toRef, toRefs, watch } from 'vue'
import { ElMessage, UploadFile } from 'element-plus'
import { arrayBuffer, json } from 'stream/consumers'
import { getChatList, getHistoryMessage } from '@/api/module/chat'
import { User } from '@/api/interface'
import { ChatStore } from '@/store/chatState'
import { GlobalStore } from '@/store/globalState'
import { storeToRefs } from 'pinia'


const socket = inject<Ref<Socket>>('socket')
const currChatUser = ref()
const chatContent = ref('')
const chatList = ref<User[]>()
const uploadPic = ref()
const fr = new FileReader()
const chatState = ChatStore()
const globalState = GlobalStore()
const chatbox = ref<HTMLElement | null>(null)

const { chat } = storeToRefs(chatState)

const mychat = computed(() => {
    return chat.value[globalState.userInfo.id!]
})
watch([currChatUser, mychat], async () => {
    await nextTick(() => {
        console.log('nexttick');
    })
    if (chatbox.value) {
        console.log(chatbox);

        console.log('chatbox', chatbox.value!.scrollTop, chatbox.value!.scrollHeight!, chatbox.value!.clientHeight!);
        chatbox.value!.scrollTop = chatbox.value!.scrollHeight! - chatbox.value!.clientHeight!

    }
}, {
    // immediate: true,
    deep: true,
})

//设置表情
const setEmoji = (emoji: string) => {
    chatContent.value = chatContent.value + emoji
}
//当前聊天对象
const setChatUser = async (user: User) => {
    currChatUser.value = user

    if (!chat.value[globalState.userInfo.id!]?.[currChatUser.value.id!]) {
        const result = await getHistoryMessage({ id: currChatUser.value.id })
        if (result.code == '200') {
            chatState.setHistoryMessage(globalState.userInfo.id!, currChatUser.value.id, result.data)
        }
    }

}
//发送图片
const submitPic = (uploadFile: UploadFile) => {

    console.log(uploadFile);

    fr.readAsArrayBuffer(uploadFile.raw as Blob)

    const event = (e: any) => {
        let buf = e.target?.result;
        uploadPic.value = buf
        console.log(uploadPic);
        fr.removeEventListener('load', event)
        submit({ image: uploadPic.value, toId: currChatUser.value.id })
    }
    fr.addEventListener("load", event);

}
//发送文字
const submitText = (text: string) => {
    submit({ text: chatContent.value, toId: currChatUser.value.id })
    chatContent.value = ''
}

//发送
const submit = (data: any) => {
    socket?.value.timeout(10000).emit('onMessage', data, (err: any, res: any) => {
        if (err) {
            console.log(err);
            //重发
        }
        else {
            //已发送服务端
            if (res.code == 200) {
                ElMessage({
                    message: '发送成功',
                    type: 'success',
                })
                //存本地
                chatState.setNewMessage(globalState.userInfo.id!, currChatUser.value.id, res.data)

            }
        }
    })

}

onMounted(() => {
    init()
})



const init = async () => {
    const result = await getChatList()
    if (result.code == '200') {
        chatList.value = result.data!
        currChatUser.value = chatList.value[0]
    }
}















</script>

<style scoped lang="less">
.main {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-items: center;


    .chat-list {
        height: 600px;
        overflow: auto;

        .chat-card {
            display: flex;
            padding: 10px 10px;
            align-items: center;

            .chat-info {
                display: flex;
                flex-direction: column;
                margin-left: 10px;

                .chat-username {
                    font-weight: 700;
                    font-size: 18px;
                    color: #000;
                }

                .chat-content {
                    font-size: 12px;
                    color: gray;
                }
            }

        }
    }

}

.hvr-fade:hover,
.hvr-fade:focus,
.hvr-fade:active {
    background-color: #fff6de;
}

.chat-window {
    width: 100%;
    height: 600px;
    padding: 20px;
    box-shadow: var(--el-box-shadow-light);
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    .chat-user {
        font-size: 20px;
        font-weight: 700;
        padding: 8px 0 14px 0;

    }

    .chat-detail {
        height: 400px;
        overflow: auto;
        border-bottom: 1px solid rgb(222, 222, 222);


        .other-chat {
            overflow: hidden;
            width: 100%;
            text-align: left;
            display: flex;
            align-items: center;
            padding: 10px 0;

            .other-chat-content {
                background-color: #ffe382;
                padding: 5px 10px;
                border-radius: 5px;
                margin-left: 10px;
                overflow: hidden;

                .el-image {
                    vertical-align: bottom;
                }
            }
        }

        .my-chat {
            overflow: hidden;
            width: 100%;
            text-align: right;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 10px 0;

            .my-chat-content {
                background-color: #ffe382;
                padding: 5px 10px;
                border-radius: 5px;
                margin-right: 10px;
                overflow: hidden;

                .el-image {

                    vertical-align: bottom;
                }
            }
        }
    }

    .input-text {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        flex: 1;

        .emoji {
            margin-right: 10px;
        }

        .input-header {
            display: flex;

            .input-pic {
                margin-left: 10px;
            }
        }

        .input-form {
            min-height: 0;
            flex: 1;

            :deep(.el-textarea__inner) {
                box-shadow: none !important;
            }
        }

        :deep(.el-button) {
            width: fit-content;
            align-self: flex-end;
        }
    }

}

.submit {
    background-color: #ffc524;
    color: black;
    border: 0;
}
</style>