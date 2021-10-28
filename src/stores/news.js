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
    bbcNewsList: [],
    articlesList: [],
    businessList: [],
    totalBusinessNews: null,
    totalNews: null,
    totalCategoryNews: null,
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

  getters: {
    getNewsList: (state) => state.articles,
    getBusinessNewsDetails: (state) => state.sources,
  },

  actions: {
    // fetch Top Headlines News
    fetchNews(params) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=00f0cfa8579d4543b7915d2fd59cc271`,
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
            `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=00f0cfa8579d4543b7915d2fd59cc271`,
            { params }
          )
          .then((response) => {
            console.log(response)
            this.newsList = response.data.articles
            this.totalCategoryNews = response.data.totalResults

            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    // fetch Business News
    fetchBusinessNews(params) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=00f0cfa8579d4543b7915d2fd59cc271
`,
            { params }
          )
          .then((response) => {
            this.businessList = response.data.sources
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    // fetch Category News
    fetchCategoryNews(params) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=00f0cfa8579d4543b7915d2fd59cc271`,
            { params }
          )
          .then((response) => {
            this.bbcNewsList = response.data.articles
            this.totalCategoryNews = response.data.totalResults
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
            this.newsData.push(response.data.news)
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
            `https://newsapi.org/v2/everything?q=Apple&from=2021-10-20&sortBy=popularity&apiKey=00f0cfa8579d4543b7915d2fd59cc271
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
