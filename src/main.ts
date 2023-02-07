import { createApp } from 'vue'
import './style/reset.css'
import './style/tailwindcss.css'
import App from './App.vue'
import router from '@/router/index'
import 'animate.css'
import 'hover.css'


createApp(App).use(router).mount('#app')

