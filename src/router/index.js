import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NewsIndex from '../views/news/NewsIndex.vue'
import NewsCreate from '../views/news/NewsCreate.vue'
import ArticlesIndex from '../views/articles/ArticlesIndex.vue'
import ArticleView from '../views/articles/ArticleView.vue'
import NewsView from '../views/news/NewsView'

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
  {
    path: '/news-view/:id',
    name: 'NewsView',
    component: NewsView,
  },
  // articles
  {
    path: '/articles/articles-index',
    name: 'ArticlesIndex',
    component: ArticlesIndex,
  },
  {
    path: '/article-view/:id',
    name: 'ArticleView',
    component: ArticleView,
  },

  // about
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  // News
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
