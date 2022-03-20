import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@renderer/utils/extends'

import '@renderer/assets/style/global.styl'
import 'virtual:svg-icons-register'

createApp(App).use(router).mount('#app')
