import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MaoShanPaiPan from '../views/MaoShanPaiPan.vue'
import DaiKaiFa from '../views/DaiKaiFa.vue'
import GLOBALCONFIG from '@/until/globalConfig'
console.log('process.env.BASE_URL:',process.env.BASE_URL) // 
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path: '/maoshanpaipan',
    name: 'maoshanpaipan',
    component: MaoShanPaiPan
  },{
    path: '/daikaifa',
    name: 'daikaifa',
    component: DaiKaiFa
  },
  {
    path: '/xuankongpaipan',
    name: 'xuankongpaipan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/XuanKongPaiPan.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sign.vue')
  },
  {
    path: '/maoshanuser',
    name: 'maoshanuser',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MaoShanUser.vue')
  },
  {
    path: '/geiwoliuyan',
    name: 'geiwoliuyan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GeiWoLiuYan.vue')
  },
  {
    path: '/photography',
    name: 'photography',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Photography.vue')
  },
  {
    path: '/jieguajilu',
    name: 'jieguajilu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Jieguajilu.vue')
  },
]

const router = createRouter({
  history:GLOBALCONFIG.HISTORY == 'LOCAL' ? createWebHashHistory(process.env.BASE_URL)// ????????????
  : createWebHistory(process.env.BASE_URL),//????????????,
  routes
})

export default router
