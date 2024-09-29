import { createApp } from 'vue'
import './style.css'
import store from './store'
import './index.css'
import router from './router'
import App from './App.vue'


createApp(App)
.use(store)
.user(router)
.mount('#app')
