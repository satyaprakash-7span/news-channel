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
    fetchNews() {
      return new Promise((resolve, reject) => {
        axios
          .get(
            ` https://newsapi.org/v2/top-headlines?country=us&apiKey=1393c54efc254684aa121dad468890cd
`
          )
          .then((response) => {
            this.newsList = response.data.articles
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
          .get(
            `https://newsapi.org/v2/everything?q=Apple&from=2021-10-20&sortBy=popularity&apiKey=1393c54efc254684aa121dad468890cd

`
          )
          .then((response) => {
            this.newsList = response.data.articles
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
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://newsapi.org/v2/everything?q=Apple&from=2021-10-20&sortBy=popularity&apiKey=05f789b6c5bb4df1bf2cacafc7d7c4b6
`,
            { params }
          )
          .then((response) => {
            console.log(response.data)
            this.articlesList = response.data.articles
            this.newsList = response.data.articles
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
})
