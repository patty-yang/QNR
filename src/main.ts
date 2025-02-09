import './assets/css/index.scss'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'

library.add(fas)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)

app.mount('#app')
