<template>
  <div class="mt-20 overflow-hidden sm:mt-32 bg-gray-50">
    <!-- articles hero section -->
    <ArticlesIndexAdv />

    <div class="max-w-5xl mx-auto border border-gray-200"></div>

    <div
      class="px-4 py-6 mx-auto mt-12 mb-10 bg-gray-100 rounded-md shadow-md  sm:mt-20 max-w-7xl sm:px-6"
    >
      <h1 class="text-xl font-bold text-center sm:text-3xl lg:text-5xl">
        Latest Updated Articles
      </h1>

      <div class="mx-auto mt-6 mb-6 border border-gray-300 max-w-7xl"></div>

      <div>
        <div
          class="grid w-full grid-cols-1 gap-8 py-6  sm:grid-cols-2 lg:grid-cols-3"
        >
          <router-link
            :to="`/article-view/${article.source.id}`"
            class="relative transition-all duration-300 transform bg-white rounded-md shadow-sm cursor-pointer  hover:bg-gray-100 hover:rounded-md group rounded-t-md hover:shadow-2xl motion-reduce:transform-none hover:border hover:border-gray-400"
            v-for="(article, index) in newsStore.newsList"
            :key="index"
          >
            <div class="px-4 py-3">
              <div class="mt-2">
                <h3
                  class="mt-2 text-lg font-medium text-gray-900  group-hover:text-blue-600 sm:text-xl"
                >
                  {{ article.title }}
                </h3>
              </div>

              <div class="pb-2 mt-4">
                <div
                  class="max-w-md mx-auto mt-2 mb-2 border border-gray-200"
                ></div>
                <p
                  v-if="article.description"
                  class="mt-2 text-sm font-normal text-gray-500 truncate"
                >
                  {{ article.description }}
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
                  v-if="article.content"
                  class="mt-2 text-sm font-normal text-gray-900 truncate"
                >
                  {{ article.content }}
                </p>
                <div class="flex items-center justify-between mt-4">
                  <label for="" class="text-sm font-semibold text-gray-900">{{
                    article.publishedAt
                  }}</label>

                  <label
                    for=""
                    class="text-sm font-semibold text-gray-900 cursor-pointer  hover:text-blue-500"
                    >{{ article.author }}</label
                  >
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div
          v-if="!newsStore.newsList.length"
          class="flex flex-col items-center justify-center text-base text-gray-400 "
        >
          <ExclamationIcon class="w-12 h-12 text-gray-500" />
          <label
            class="block px-2 mb-2 text-sm text-gray-500 uppercase sm:text-xl"
          >
            No Articles found!
          </label>
        </div>
      </div>
    </div>
    <div class="flex justify-end p-5" v-if="newsStore.newsList.length > 0">
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
import { ref, computed, watch } from 'vue'
import { useNewsStore } from '@/stores/news'
import VPagination from '@hennge/vue3-pagination'
import '@hennge/vue3-pagination/dist/vue3-pagination.css'
import ArticlesIndexAdv from './partials/ArticlesIndexAdv.vue'
import { ExclamationIcon } from '@heroicons/vue/outline'

// store
const newsStore = useNewsStore()
watch(() => {
  fetchInitialData()
})

const page = ref(1)

const totalPages = computed(() => {
  const total = newsStore.totalNews
  const limit = 10
  return Math.ceil(total / limit)
})

function fetchInitialData() {
  newsStore.fetchArticles({ pageSize: 6, page })
}

function updateHandler() {
  const current = page.value + 1
  newsStore.fetchNews({ pageSize: 6, page: current })
}
</script>
