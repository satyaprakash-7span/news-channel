<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            v-if="page != 1"
            @click="page--"
          >
            <ChevronLeftIcon class="h-6" />
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            v-for="(pageNumber, index) in pages.slice(page - 1, page + 5)"
            :key="index"
            @click="page = pageNumber"
          >
            {{ pageNumber }}
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            @click="page++"
            v-if="page < pages.length"
            class="page-link"
          >
            <ChevronRightIcon class="h-6" />
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'
export default {
  props: {
    pageSize: {
      type: [Array, Number, String],
      default: '',
    },
  },

  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },

  data() {
    return {
      news: [''],
      page: 1,
      perPage: 9,
      pages: [],
    }
  },
  methods: {
    getNews() {
      // let data = []
      for (let i = 0; i < 50; i++) {
        this.news.push({ first: 'John', last: 'Doe', suffix: '#' + i })
      }
    },
    setPages() {
      let numberOfPages = Math.ceil(this.news.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
    paginate(news) {
      let page = this.page
      let perPage = this.perPage
      let from = page * perPage - perPage
      let to = page * perPage
      return news.slice(from, to)
    },
  },
  computed: {
    displayednews() {
      return this.paginate(this.news)
    },
  },
  watch: {
    news() {
      this.setPages()
    },
  },
  created() {
    this.getNews()
  },
  filters: {
    trimWords(value) {
      return value.split(' ').splice(0, 20).join(' ') + '...'
    },
  },
}
</script>

<style scoped>
button.page-link {
  display: inline-block;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
.offset {
  width: 500px !important;
  margin: 20px auto;
}
</style>
