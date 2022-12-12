// src/axios.ts
import axios from 'axios'
import GLOBALCONFIG from './globalConfig'

const ConfigBaseURL = GLOBALCONFIG.GLOBAL.vue_http_api // ..
//使用create方法创建axios实例
console.log('configBaseUrl:', ConfigBaseURL)
const Axios = axios.create({
  timeout: 5000, // 请求超时时间
  baseURL: ConfigBaseURL,
  headers: {
    // 'Content-Type': 'application/json;charset=UTF-8',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    "Access-Control-Allow-Headers": "X-Requested-With"
  }
})
// 添加请求拦截器
Axios.interceptors.request.use(config => {
  // console.log(config)
  return config
})
// 添加响应拦截器
Axios.interceptors.response.use(response => {
  // console.log(response)
  return response.data
}, error => {
  // console.log('Response: error', error)
  // const msg = error.Message !== undefined ? error.Message : ''
  // alert(msg)
  return Promise.reject(error)
})

export default Axios;