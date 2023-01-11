import { createApp } from 'vue'
import './style/reset.less'
import App from './App.vue'
import router from '@/router/index'
import 'uno.css'
import 'animate.css'
import 'hover.css'

createApp(App).use(router).mount('#app')

