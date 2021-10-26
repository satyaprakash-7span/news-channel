<template>
  <div clas="mt-24">
    <h1
      class="py-6 mt-6 mb-6 font-serif text-xl text-center text-white bg-red-600  sm:text-2xl lg:text-5xl"
    >
      <span class="mr-4 space-x-1 font-serif text-center">
        <span
          class="pl-3 text-base font-medium text-center text-red-700 bg-white border rounded-md  sm:text-2xl lg:text-5xl"
        >
          B
        </span>
        <span
          class="pl-3 text-base font-medium text-center text-red-700 bg-white border rounded-md  sm:text-2xl lg:text-5xl"
        >
          B
        </span>
        <span
          class="pl-2 text-base font-medium text-center text-red-700 bg-white border rounded-md  sm:text-2xl lg:text-5xl"
        >
          C
        </span>
      </span>
      Latest Trending News
    </h1>

    <div
      class="w-full max-w-lg mx-auto mt-4 mb-4 border border-gray-200  sm:max-w-7xl"
    ></div>

    <div
      v-if="newsStore.bbcNewsList.length > 1"
      class="flex grid items-center w-full grid-cols-1 gap-6 px-4 py-4 space-x-6  bg-gray-50 sm:px-12 sm:grid-cols-2 lg:grid-cols-3 sm:py-8"
    >
      <div
        v-for="(news, index) in newsStore.bbcNewsList"
        :key="index"
        class="px-4 py-3 transition-all duration-300 rounded-md cursor-pointer  group max-w-7xl hover:border hover:border-red-600 hover:bg-white hover:shadow-2xl"
      >
        <div>
          <h1
            class="text-lg font-semibold text-gray-900  group-hover:text-red-600 sm:text-xl lg:text-2xl sm:font-bold"
          >
            {{ news.title }}
          </h1>
        </div>

        <img
          v-if="news.urlToImage"
          :src="news.urlToImage"
          class="w-full mt-3 bg-cover rounded-md h-60"
          alt=""
        />
        <img
          v-else
          src="@/assets/hd-news-2.jpeg"
          class="w-full mt-3 bg-cover rounded-md h-60"
          alt=""
        />

        <p
          v-if="news.content"
          class="mt-4 text-sm font-normal text-gray-500  group-hover:text-gray-600 sm:text-base lg:text-lg"
        >
          {{ news.content }}
        </p>
        <p
          v-else
          class="mt-4 text-sm font-normal text-gray-500  group-hover:text-gray-900 sm:text-base lg:text-lg"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quidem
          veniam, laudantium non fugit cumque unde alias laborum reiciendis!
          Fugit?
        </p>

        <div
          class="w-full max-w-lg mx-auto mt-3 mb-3 border border-gray-200  group group-hover:border hover:border-gray-400"
        ></div>

        <div class="flex items-center justify-between mt-4">
          <label
            class="text-sm font-semibold text-gray-600  group-hover:text-blue-600"
            >{{ news.publishedAt }}</label
          >
          <label
            class="text-sm font-semibold text-gray-600 group-hover:text-red-600"
          >
            {{ news.author }}</label
          >
        </div>
      </div>
    </div>

    <div
      v-else
      class="flex grid items-center w-full grid-cols-1 gap-6 px-4 py-4 space-x-6  bg-gray-50 sm:px-12 sm:grid-cols-3 sm:py-8"
    >
      <div
        class="px-4 py-3 transition-all duration-300 rounded-md cursor-pointer  max-w-7xl hover:border hover:border-red-600 group hover:bg-white hover:shadow-2xl"
      >
        <div>
          <h1
            class="text-lg font-semibold text-gray-900  sm:text-xl lg:text-2xl sm:font-bold group-hover:text-red-600"
          >
            Sports News
          </h1>
        </div>

        <img
          src="@/assets/sports-img.jpeg"
          class="w-full mt-3 bg-cover rounded-md h-60"
          alt=""
        />

        <p
          class="mt-4 text-sm font-normal text-gray-500  group-hover:text-gray-900 sm:text-base lg:text-lg"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quidem
          veniam, laudantium non fugit cumque unde alias laborum reiciendis!
          Fugit?
        </p>

        <div
          class="w-full max-w-lg mx-auto mt-3 mb-3 border border-gray-200  group group-hover:border hover:border-gray-400"
        ></div>

        <div class="flex items-center justify-between mt-4">
          <label
            class="text-sm font-normal text-gray-400 group-hover:text-blue-600"
            >Author</label
          >
          <label
            class="text-sm font-normal text-gray-400 group-hover:text-red-600"
            >Cr 7</label
          >
        </div>
      </div>
      <div
        class="px-4 py-3 transition-all duration-300 rounded-md cursor-pointer  max-w-7xl hover:border hover:border-red-600 group hover:bg-white hover:shadow-2xl"
      >
        <div>
          <h1
            class="text-lg font-semibold text-gray-900  sm:text-xl lg:text-2xl sm:font-bold group-hover:text-red-600"
          >
            Stock News
          </h1>
        </div>

        <img
          src="@/assets/stock-img.jpeg"
          class="w-full mt-3 bg-cover rounded-md h-60"
          alt=""
        />

        <p
          class="mt-4 text-sm font-normal text-gray-500  group-hover:text-gray-900 sm:text-base lg:text-lg"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quidem
          veniam, laudantium non fugit cumque unde alias laborum reiciendis!
          Fugit?
        </p>

        <div
          class="w-full max-w-lg mx-auto mt-3 mb-3 border border-gray-200  group group-hover:border hover:border-gray-400"
        ></div>

        <div class="flex items-center justify-between mt-4">
          <label
            class="text-sm font-normal text-gray-400 group-hover:text-blue-600"
          >
            Author
          </label>
          <label
            class="text-sm font-normal text-gray-400 group-hover:text-red-600"
          >
            William
          </label>
        </div>
      </div>
      <div
        class="px-4 py-3 transition-all duration-300 rounded-md cursor-pointer  max-w-7xl hover:border hover:border-red-600 group hover:bg-white hover:shadow-2xl"
      >
        <div>
          <h1
            class="text-lg font-semibold text-gray-900  sm:text-xl lg:text-2xl sm:font-bold group-hover:text-red-600"
          >
            Politics News
          </h1>
        </div>

        <img
          src="@/assets/politics-img.jpeg"
          class="w-full mt-3 bg-cover rounded-md h-60"
          alt=""
        />

        <p
          class="mt-4 text-sm font-normal text-gray-500  group-hover:text-gray-900 sm:text-base lg:text-lg"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quidem
          veniam, laudantium non fugit cumque unde alias laborum reiciendis!
          Fugit?
        </p>

        <div
          class="w-full max-w-lg mx-auto mt-3 mb-3 border border-gray-200  group group-hover:border hover:border-red-600"
        ></div>

        <div class="flex items-center justify-between mt-4">
          <label
            class="text-sm font-normal text-gray-400 group-hover:text-blue-600"
          >
            Author
          </label>
          <label
            class="text-sm font-normal text-gray-400 group-hover:text-red-600"
          >
            Ministry of Community
          </label>
        </div>
      </div>
    </div>

    <div class="flex justify-end p-5">
      <v-pagination
        v-model="page"
        :pages="totalPages"
        :range-size="2"
        active-color="#DCEDFF"
        @update:modelValue="updateHandler"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useNewsStore } from '@/stores/news'
import '@hennge/vue3-pagination/dist/vue3-pagination.css'
import VPagination from '@hennge/vue3-pagination'
// store
const newsStore = useNewsStore()

const page = ref(1)

fetchInitialData()

watch(() => {
  fetchInitialData()
})

// computed props
const totalPages = computed(() => {
  const total = newsStore.totalNews
  const limit = 10
  return Math.ceil(total / limit)
})

// methods
function fetchInitialData() {
  newsStore.fetchCategoryNews({ pageSize: 3, page })
}

function updateHandler() {
  const current = page.value + 1
  newsStore.fetchCategoryNews({ pageSize: 3, page: current })
}
</script>
