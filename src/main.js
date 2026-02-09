import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'


// 拿到图标后全局遍历，然后app.进行全局注册。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//路由挂载
app.use(router)
app.mount('#app')
