import http from '@/api/index'
import { Chat } from '../interface/index'


export const getChatList = () => {
    return http.get<Chat.ResChatList[]>('/chat/chatlist')
}

export const getHistoryMessage = (params:Chat.ReqHistoryMessage) => {
    return http.get<Chat.ResHistoryMessage[]>(`/chat/historymessage/${params.id}`)
}