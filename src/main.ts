import { createApp, provide, ref } from 'vue'
import './style/reset.css'
import App from './App.vue'
import router from '@/router/index'
import 'animate.css'
import 'hover.css'
import { createPinia } from 'pinia'
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-message-box.css";
import "element-plus/theme-chalk/el-overlay.css";
import "element-plus/theme-chalk/el-upload.css";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { Socket } from 'socket.io-client'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)



app.use(router).use(pinia).mount('#app')


