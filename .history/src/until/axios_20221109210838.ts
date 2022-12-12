// src/axios.ts
import axios from 'axios'
// const ConfigBaseURL = 'http://124.221.105.167:3000/' //默认路径，这里也可以使用env来判断环境
const ConfigBaseURL = 'http://localhost:3030/' //默认路径，这里也可以使用env来判断环境
//使用create方法创建axios实例
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