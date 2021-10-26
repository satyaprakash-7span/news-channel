<template>
  <div class="w-full overflow-auto bg-white">
    <NewsIndexAdv />

    <!-- Updated latest News -->
    <div
      class="px-4 py-6 mx-auto mt-12 mb-10 rounded-md shadow-md  bg-gray-50 sm:mt-20 max-w-7xl sm:px-6"
    >
      <h1 class="text-xl font-bold text-center sm:text-3xl lg:text-5xl">
        Latest Arrived News
      </h1>

      <div class="mx-auto mt-6 mb-6 border border-gray-300 max-w-7xl"></div>

      <div>
        <div
          class="grid w-full grid-cols-1 gap-8 py-6  sm:grid-cols-2 lg:grid-cols-3"
        >
          <router-link
            v-for="(news, index) in newsStore.newsList"
            :to="`/news-view/${news.source.id}`"
            class="relative transition-all duration-300 transform bg-white rounded-md shadow-sm cursor-pointer  hover:bg-gray-100 hover:rounded-md group rounded-t-md hover:shadow-2xl motion-reduce:transform-none hover:border hover:border-gray-400"
            :key="index"
          >
            <div class="px-4 py-3">
              <img
                v-if="news.urlToImage"
                :src="news.urlToImage"
                alt="Image url"
                class="w-full bg-cover rounded-md shadow-sm h-60"
              />
              <img
                v-else
                src="@/assets/hd-news.jpeg"
                alt="Image url"
                class="w-full bg-cover rounded-md shadow-sm h-60"
              />

              <div class="mt-2">
                <label class="text-base font-semibold text-gray-600 uppercase">
                  Title
                </label>
                <div
                  class="max-w-lg mx-auto mt-2 mb-2 border border-gray-200  sm:max-w-md"
                ></div>
                <h3
                  class="mt-2 text-lg font-medium text-gray-900  group-hover:text-blue-500 sm:text-xl"
                >
                  {{ news.title }}
                </h3>
              </div>

              <div class="pb-2 mt-4">
                <label class="text-base font-semibold text-gray-600 uppercase">
                  Description
                </label>
                <div
                  class="max-w-lg mx-auto mt-2 mb-2 border border-gray-200  sm:max-w-md"
                ></div>
                <p
                  v-if="news.description"
                  class="mt-2 text-sm font-normal text-gray-500 truncate"
                >
                  {{ news.description }}
                </p>
                <p
                  class="mt-2 text-sm font-normal text-gray-500 truncate"
                  v-else
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  alias, molestiae fugit quasi numquam explicabo aliquam? Esse
                  excepturi veritatis provident.
                </p>
                <p
                  v-if="news.content"
                  class="mt-2 text-sm font-normal text-gray-900 truncate"
                >
                  {{ news.content }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
        <div
          v-if="!newsStore.newsList"
          class="flex flex-col items-center justify-center py-6 mt-4 text-base text-gray-400 "
        >
          <ExclamationIcon class="w-12 h-12 text-gray-500" />
          <label
            class="block px-2 mb-2 text-sm text-gray-500 uppercase sm:text-xl"
          >
            No news found!
          </label>
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
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import NewsIndexAdv from './partials/NewsIndexAdv.vue'
import { ExclamationIcon } from '@heroicons/vue/solid'
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
  newsStore.fetchNews({ pageSize: 11, page })
}

function updateHandler() {
  const current = page.value + 1
  newsStore.fetchNews({ pageSize: 11, page: current })
}
</script>
