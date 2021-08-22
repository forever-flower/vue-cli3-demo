import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import ElementUI from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style.js'

const app = createApp(App)
app.use(router)
app.use(Varlet)
app.mount('#app')
