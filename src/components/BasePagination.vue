<template>
  <div id="pagination-app">
    <div>
      <div class="px-4 mt-4 row" v-for="(item, index) in data" :key="index">
        { {{ item.name }}}
      </div>
      <div class="flex items-center justify-end mr-4">
        <button
          @click="previous()"
          class="px-2 py-2 mt-4 text-gray-600 border border-gray-200  hover:border-blue-500 hover:bg-gray-200"
        >
          <ChevronLeftIcon class="w-5 h-5 text-gray-500" />
        </button>

        <a
          class="
            px-3
            py-1.5
            mt-4
            cursor-pointer
            text-gray-600
            hover:border-blue-500 hover:bg-gray-200
            border border-gray-200
          "
          v-for="(item, index) in data"
          :key="index"
        >
          {{ page }}
        </a>
        <span
          class="
            px-4
            leading-normal
            space-x-2
            py-1.5
            gap-4
            mt-4
            text-gray-600
            border border-gray-200
          "
          >.....</span
        >

        <button
          @click="next()"
          class="px-2 py-2 mt-4 text-gray-600 border border-gray-200  hover:border-blue-500 hover:bg-gray-200"
        >
          <ChevronRightIcon class="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
  el: '#pagination-app',

  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  props: {
    pagination: {
      type: [String, Number, Array],
      default: '',
    },
    maxSize: {
      type: [String, Number, Array],
      default: 5,
    },
    rowsData: {
      type: [Function],
      required: false,
    },
  },

  data() {
    return {
      rows: [
        { name: 'this is the first' },
        { name: 'second' },
        { name: 'third' },
        { name: 'this is the first of second page' },
        { name: 'b from 2th' },
        { name: 'c from 3th' },
        { name: 'foo' },
        { name: 'bar, the last item' },
      ],
      pageIndex: 0,
      rowsPerPage: 5,
      nextPage: 1,
    }
  },

  computed: {
    data: function () {
      const startIndex = this.pageIndex * this.rowsPerPage
      const endIndex = startIndex + this.rowsPerPage
      return this.rows.slice(startIndex, endIndex)
    },
    page: function () {
      return this.pageIndex + 1
    },
  },

  methods: {
    next() {
      const maxPageIndex = Math.ceil(this.rows.length / this.rowsPerPage) - 1
      this.pageIndex = Math.min(this.pageIndex + 1, maxPageIndex)
    },
    previous() {
      this.pageIndex = Math.max(this.pageIndex - 1, 0)
    },
  },
}
</script>

<style scoped>
.row {
  padding: 10px;
  border: 1px dashed #ccc;
  margin: 5px;
  display: inline-block; /** because the code window is so small **/
}
</style>
