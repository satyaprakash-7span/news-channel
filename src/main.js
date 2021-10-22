import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import store from './store'
import { createPinia } from 'pinia'
import axios from 'axios'
axios.defaults.headers.common['Content-Type'] = 'application/json'

createApp(App).use(store).use(router).use(createPinia()).mount('#app')
