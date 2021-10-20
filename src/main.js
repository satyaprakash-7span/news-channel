import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import store from './store'
import { createPinia } from 'pinia'
import axios from 'axios'

axios.defaults.baseURL = '/https://newsapi.org/'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common = {
  Authorization: `Bearer ${'286dab38c44ed569871e8337b06912ec49cac8a7135f2deefbf999e580edda79'}`,
}

//Token
createApp(App).use(store).use(router).use(createPinia()).mount('#app')
