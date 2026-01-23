
import {createRouter, createWebHashHistory } from 'vue-router'

import layout from '../views/Main.vue'
import Login from '../views/login/index.vue'

const routes = [
    {
        path:'/',
        component:layout
    },
    {
        path:'/login',
        component: Login
    }
]

const router = createRouter({
    //路由数据
    routes,
    //路由匹配模式
    history: createWebHashHistory()
})

export default router