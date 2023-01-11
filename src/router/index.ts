import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', component: Layout }]
})

export default router