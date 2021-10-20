import axios from 'axios'
import { defineStore } from 'pinia'
export const useNewsStore = defineStore({
  id: 'news',

  state: () => ({
    news: [],
    articles: [],
    totalArticles: 0,
    currentNews: null,
    newsList: [],
    articlesList: [],
  }),

  newsData: {
    title: '',
    description: '',
    country_id: null,
  },

  articleData: {
    name: '',
    description: '',
    body: '',
  },

  getters: { getNewsList: (state) => state.news },

  actions: {
    fetchNews(id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`v2/everything`, id)
          .then((response) => {
            this.newsList = response.data.data
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    fetchArticles() {
      return new Promise((resolve, reject) => {
        axios
          .get(`v2/top-headlines`)
          .then((response) => {
            this.articles = response.data.data
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    addNews(data) {
      return new Promise((resolve, reject) => {
        axios
          .post('https://jsonplaceholder.typicode.com/posts', data)
          .then((response) => {
            this.news.push(response.data)
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    addArticle(data) {
      return new Promise((resolve, reject) => {
        axios
          .post('v2/everything', data)
          .then((response) => {
            this.articles.push(response.data)

            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    searchArticles(params) {
      console.log(params, 'params')
      return new Promise((resolve, reject) => {
        axios
          .get(`v2/everything -G `, { params })
          .then((response) => {
            console.log(response.data)
            this.articlesList = response.data.articles.data
            this.newsList = response.data.news.data
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
})
