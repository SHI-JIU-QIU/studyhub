import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import Login from '@/view/Login/index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/home',
        component: Layout,
    },
    {
        path: '/login',
        component: Login
    }]
})

export default router