import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewsIndex from '../views/news/NewsIndex.vue'
import NewsCreate from '../views/news/NewsCreate.vue'
import ArticlesIndex from '../views/articles/ArticlesIndex.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // news
  {
    path: '/news/news-index',
    name: 'NewsIndex',
    component: NewsIndex,
  },
  {
    path: '/news-create',
    name: 'NewsCreate',
    component: NewsCreate,
  },
  // articles
  {
    path: '/articles/articles-index',
    name: 'ArticlesIndex',
    component: ArticlesIndex,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  // News
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
