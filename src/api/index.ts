import axios, { AxiosRequestConfig, AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { ResultEnum } from "@/enums/httpEnums";
import { GlobalStore } from "@/store/globalState";
import { ElMessage } from 'element-plus';
import { checkStatus } from './helper/checkStatus';
import { ResultData } from './interface/index'

const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_URL,
    timeout: ResultEnum.TIMEOUT as number,
    withCredentials: true
}


class RequsetHttp {
    service: AxiosInstance
    constructor(config: AxiosRequestConfig) {
        this.service = axios.create(config)

        this.service.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                const globalStore = GlobalStore()
                config.headers!.Authorization = `Bearer ${globalStore.token}`
                return config
            },
            (error: AxiosError) => {
                return Promise.reject(error);
            })
        this.service.interceptors.response.use(
            (response: AxiosResponse) => {
                const { data } = response

                if (data.code && data.code !== ResultEnum.SUCCESS) {
                    console.log(data);
                    
                    ElMessage.error(data.message)
                    return Promise.reject(data)
                }


                return data
            },
            (error: AxiosError) => {
                const { response } = error
           
                
                if (response) {
                    checkStatus(response.status)
                }
                return Promise.reject(error);
            }
        )

    }



    get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
        return this.service.get(url, { params, ..._object })
    }
    post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object);
	}
	put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.put(url, params, _object);
	}
	delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
		return this.service.delete(url, { params, ..._object });
	}



}


export default new RequsetHttp(config)

