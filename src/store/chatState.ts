import { Chat } from '@/api/interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ChatState } from './interface'
export const ChatStore = defineStore('chatState', {
    state: (): ChatState => ({
        chat:{}
    }),

    actions: {
        setHistoryMessage(myId: string, chatId: string, message: Chat.ResHistoryMessage[]) {
            
            if(this.chat[myId]){
                this.chat[myId][chatId] = message
            }
            else{
                 this.chat[myId] = {}
                 this.chat[myId][chatId] = message
            }
            
           
           
        },

        setNewMessage(myId: string, chatId: string, message: Chat.ResHistoryMessage){
            this.chat[myId][chatId].push(message)
        }

    },
    persist: {
        key: 'chatStore'
    },

})