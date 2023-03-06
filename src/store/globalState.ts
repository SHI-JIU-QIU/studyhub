import { defineStore } from 'pinia'
import { ref } from 'vue'
import { GlobalState } from './interface'
export const GlobalStore = defineStore('globalState', {
    state: (): GlobalState => ({
        token: '',
        socketId: '',
        userInfo: {}
    }),

    actions: {
        setToken(token: string) {
            this.token = token
        },
        setSocketId(socketId: string) {
            this.socketId = socketId
        },
        setUserInfo(userInfo: any) {
            this.userInfo = userInfo
        }

    },
    persist: {
        key: 'GlobalStore'
    },



})