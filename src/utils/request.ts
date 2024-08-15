import axios from 'axios'
import type { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

/* 服务器返回数据的的类型，根据接口文档确定 */
export interface Result<T = any> {
    code: number,
    msg: string,
    data: T
}

const service: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 0
})

/* 请求拦截器 */
service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    return config
}, (error: AxiosError) => {
    return Promise.reject(error)
})

/* 响应拦截器 */
service.interceptors.response.use((response: AxiosResponse) => {
    const { code, message, data } = response.data
    if (code === 200) {
        // 将组件用的数据返回
        return data
    } else {
        // 处理业务错误。
        return Promise.reject(new Error(message))
    }
}, (error: AxiosError) => {
    // 处理 HTTP 网络错误
    // HTTP 状态码
    const status = error.response?.status
    switch (status) {
        case 401:
            break;
        case 403:
            break;
        case 404:
            break;
        case 500:
            break;
        default:
    }
    return Promise.reject(error)
})

/* 导出封装的请求方法 */
export const http = {
    get<T = any>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
        return service.get(url, config)
    },

    post<T = any>(url: string, data?: object, config?: InternalAxiosRequestConfig): Promise<T> {
        return service.post(url, data, config)
    },

    put<T = any>(url: string, data?: object, config?: InternalAxiosRequestConfig): Promise<T> {
        return service.put(url, data, config)
    },

    delete<T = any>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
        return service.delete(url, config)
    }
}

/* 导出 axios 实例 */
export default service