import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'
import { useUserStore } from '@/pinia/modules/user'
axios.defaults.adapter = mpAdapter

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 99999
})

// 请求拦截器
request.interceptors.request.use(config => {
  // 拿token
  const { userInfo } = useUserStore()
  config.headers = {
    'Content-Type': 'application/json',
    //  要传token就传
    // 'x-token': userInfo.token
    ...config.headers
  }
  return config
}, error => {
  // dosomething ...
  return error
})

// 响应拦截器
request.interceptors.response.use(response => {
  // dosomething ...
  return response.data
}, error => {
  // dosomething ...
  return error
})

export default request
