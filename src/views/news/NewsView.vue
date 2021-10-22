<template>
  <div class="bg-white">
    <div class="px-4 mt-20 sm:px-2 sm:mt-0">
      <div
        class="w-full h-auto mx-auto mt-16 mb-20 bg-gray-100 rounded-md shadow-md  sm:mt-24 max-w-7xl"
      >
        <div class="lg:px-4">
          <img
            v-if="selectedNews.urlToImage"
            :src="selectedNews.urlToImage"
            alt=""
            style="width: 100%"
            class="px-4 py-4 mt-2 border border-gray-300 rounded-md shadow-sm"
          />
          <img src="@/assets/hd-news.jpeg" v-else />
        </div>
        <div class="px-6 py-5">
          <!-- News id -->
          <div class="mt-5">
            <label
              for=""
              class="text-base font-bold text-gray-900 uppercase sm:text-xl"
            >
              ID :
            </label>
            <div for="" class="text-sm font-normal text-gray-600 sm:text-lg">
              {{ selectedNews.source.id }}
            </div>
          </div>

          <div class="mx-auto mt-5 mb-5 border border-gray-200 max-w-7xl"></div>

          <div class="mt-5">
            <label
              for=""
              class="text-base font-bold text-gray-900 uppercase sm:text-xl"
            >
              Name :
            </label>
            <div for="" class="text-sm font-normal text-gray-600 sm:text-lg">
              {{ selectedNews.source.name }}
            </div>
          </div>

          <div class="mx-auto mt-5 mb-5 border border-gray-200 max-w-7xl"></div>

          <div class="mt-5">
            <label
              for=""
              class="text-base font-bold text-gray-900 uppercase sm:text-xl"
            >
              Title :
            </label>
            <div for="" class="text-sm font-normal text-gray-600 sm:text-lg">
              {{ selectedNews.title }}
            </div>
          </div>

          <div class="mx-auto mt-5 mb-5 border border-gray-200 max-w-7xl"></div>

          <div class="mt-5">
            <label
              for=""
              class="text-base font-bold text-gray-900 uppercase sm:text-xl"
            >
              Description :
            </label>
            <div for="" class="text-sm font-normal text-gray-600 sm:text-lg">
              {{ selectedNews.description }}
            </div>
          </div>

          <div class="mx-auto mt-5 mb-5 border border-gray-200 max-w-7xl"></div>

          <div class="mt-5">
            <label
              for=""
              class="text-base font-bold text-gray-900 uppercase sm:text-xl"
            >
              Content
            </label>
            <div
              class="text-sm font-normal text-gray-600 cursor-pointer  sm:text-lg"
            >
              {{ selectedNews.content }}
            </div>
          </div>

          <div class="mx-auto mt-5 mb-5 border border-gray-200 max-w-7xl"></div>

          <div class="mt-5">
            <label
              for=""
              class="text-base font-bold text-gray-900 uppercase sm:text-xl"
            >
              Url :
            </label>
            <div>
              <a
                href=""
                class="text-sm font-normal text-blue-500 cursor-pointer  hover:text-blue-600 sm:text-lg"
              >
                {{ selectedNews.url }}
              </a>
            </div>
          </div>

          <div class="mx-auto mt-5 mb-5 border border-gray-200 max-w-7xl"></div>

          <div class="mt-5">
            <label
              for=""
              class="text-base font-bold text-gray-900 uppercase sm:text-xl"
            >
              Published At :
            </label>
            <div
              class="text-sm font-normal text-gray-600 cursor-pointer  sm:text-lg"
            >
              {{ selectedNews.publishedAt }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'
import { useNewsStore } from '@/stores/news'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

let selectedNews = ref(null)

const route = useRoute()

const newsStore = useNewsStore()

getNewsDetails()

newsStore.fetchNews({
  country: 'us',
  apiKey: '702fed1efe02446a96018e9d85f39655',
})

function getNewsDetails() {
  const source = newsStore.newsList.find((_i) => {
    if (_i.source.id === route.params.id) {
      return _i
    }
  })
  selectedNews.value = source
}
</script>
