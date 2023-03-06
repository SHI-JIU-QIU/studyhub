import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import Login from '@/view/Login/index.vue'
import Register from '@/view/Register/index.vue'
import Partition from '@/view/Partition/index.vue'
import Home from '@/view/Home/index.vue'
import Chat from '@/view/Chat/index.vue'
import { GlobalStore } from '@/store/globalState'
import { io, Socket } from 'socket.io-client'

import { getCurrentInstance, inject, Ref } from 'vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        // component: Layout,
        redirect: '/login',
    },
    {
        path: '/page',
        component: Layout,
        children: [{
            path: 'home',
            component: Home
        }, {
            path: 'partition',
            component: Partition
        },
        {
            path: 'chat',
            component: Chat,
            meta: {
                auth: true
            }
        },
        ]
    },
    {
        path: '/login',
        component: Login
    }, {
        path: '/register',
        component: Register
    },

    ]
})

router.beforeEach((to, from, next) => {
    const globalState = GlobalStore()
    if (to.meta.auth && !globalState.token) {
        next('/')
    }

    next();
});


export default router