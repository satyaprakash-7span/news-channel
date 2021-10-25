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
    totalNews: null,
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
    fetchNews(params) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=702fed1efe02446a96018e9d85f39655`,
            { params }
          )
          .then((response) => {
            this.newsList = response.data.articles
            this.totalNews = response.data.totalResults
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    //  fetch all articles news
    fetchArticles(params) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=e443752513ef487890b743379f7823a3`,
            { params }
          )
          .then((response) => {
            console.log(response)
            this.newsList = response.data.articles
            this.totalNews = response.data.totalResults

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

    // search articles & news action
    searchArticles(params) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://newsapi.org/v2/everything?q=Apple&from=2021-10-20&sortBy=popularity&apiKey=e443752513ef487890b743379f7823a3
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
