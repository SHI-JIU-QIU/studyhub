import http from '@/api/index'
import { Login } from '@/api/interface/index'


export const loginApi = (params:Login.ReqLoginForm) => {
    return http.post<Login.ResLogin>('/user/login',params)
}

