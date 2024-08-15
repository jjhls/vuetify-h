import { http } from '@/utils/request'



/**
 * 获取登录验证码
 */
export function getRandomImage() {
    return http.get<string>('/login/randomImage')
}