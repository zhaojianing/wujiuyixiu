import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './until/axios'

// import { getCurrentInstance } from 'vue'; 
import md5 from "js-md5"  //导入
// const { proxy } = getCurrentInstance() as any  // 原型对象方法
// proxy.$md5=md5   //md5转换为vue原型

createApp(App).use(store).use(router).use(Antd).mount('#app')
