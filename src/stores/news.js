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

  getters: { getNewsList: (state) => state.articles },

  actions: {
    // fetch top-headlines news
    fetchNews() {
      return new Promise((resolve, reject) => {
        axios
          .get(
            ` https://newsapi.org/v2/top-headlines?country=us&apiKey=702fed1efe02446a96018e9d85f39655
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
    //  fetch all articles news
    fetchArticles() {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://newsapi.org/v2/everything?q=Apple&from=2021-10-20&sortBy=popularity&apiKey=702fed1efe02446a96018e9d85f39655
`
          )
          .then((response) => {
            console.log(response)
            this.newsList = response.data.articles
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    // add news action
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
    // add articles action
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

    // search articles & news action
    searchArticles(params) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://newsapi.org/v2/everything?q=Apple&from=2021-10-20&sortBy=popularity&apiKey=702fed1efe02446a96018e9d85f39655
`,
            { params }
          )
          .then((response) => {
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
