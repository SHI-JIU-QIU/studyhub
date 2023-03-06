import { Chat } from "@/api/interface"
import { Ref } from "vue"

export interface GlobalState {
    token: string,
    socketId: string,
    userInfo: Partial<{
        id: string
        username: string
        nickname: string
        biography: any
        avatar: string
        gender: string
        birthday: string
        telephone: string
        email: string
        city: string
        points: number
        role: number
    }>
}

export interface ChatState {
    chat: {
        [key: string]: {
            [key: string]: Chat.ResHistoryMessage[]
        }
    }

}