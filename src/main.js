import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'  //main.js 就是 Vue 应用的“入口文件”，所有全局的东西都应该放这里配置。



// 拿到图标后全局遍历，然后app.进行全局注册。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//路由挂载
app.use(router)
app.mount('#app')
