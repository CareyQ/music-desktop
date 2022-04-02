import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@renderer/utils/extends'

import '@renderer/assets/style/global.styl'
import '@renderer/assets/font/remixicon.styl'
import '@renderer/assets/font/bootstrap.styl'
import 'virtual:svg-icons-register'

createApp(App).use(router).use(createPinia()).mount('#app')
