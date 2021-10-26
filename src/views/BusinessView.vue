<template>
  <div class="bg-white">
    <div class="px-4 mt-32 sm:px-2">
      <div
        class="w-full h-auto mx-auto mt-16 mb-20 bg-gray-100 rounded-md shadow-md  sm:mt-24 max-w-7xl"
      >
        <div class="px-6 py-5">
          <!-- Business id -->
          <div class="mt-5">
            <label
              for=""
              class="text-base font-bold text-gray-900 uppercase sm:text-xl"
            >
              ID :
            </label>
            <div for="" class="text-sm font-normal text-gray-600 sm:text-lg">
              {{ selectedBusinessNews.id }}
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
              {{ selectedBusinessNews.sources.name }}
            </div>
          </div>

          <div class="mx-auto mt-5 mb-5 border border-gray-200 max-w-7xl"></div>

          <div class="mx-auto mt-5 mb-5 border border-gray-200 max-w-7xl"></div>

          <div class="flex items-center justify-between">
            <div class="mt-5">
              <label
                for=""
                class="text-base font-bold text-gray-900 uppercase sm:text-xl"
              >
                Country
              </label>
              <div
                class="text-sm font-normal text-gray-600 cursor-pointer  sm:text-lg"
              >
                {{ selectedBusinessNews.sources.country }}
              </div>
            </div>
            <div class="mt-5">
              <label
                for=""
                class="text-base font-bold text-gray-900 uppercase sm:text-xl"
              >
                Language
              </label>
              <div
                class="text-sm font-normal text-gray-600 cursor-pointer  sm:text-lg"
              >
                {{ selectedBusinessNews.sources.language }}
              </div>
            </div>
          </div>

          <div class="mt-5">
            <label
              for=""
              class="text-base font-bold text-gray-900 uppercase sm:text-xl"
            >
              Category
            </label>
            <div
              class="text-sm font-normal text-gray-600 cursor-pointer  sm:text-lg"
            >
              {{ selectedBusinessNews.sources.category }}
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
              {{ selectedBusinessNews.description }}
            </div>
          </div>
          <div class="mx-auto mt-5 mb-5 border border-gray-200 max-w-7xl"></div>

          <div class="mt-5">
            <label
              for=""
              class="text-base font-bold text-gray-900 uppercase sm:text-xl"
            >
              Url:
            </label>
            <div>
              <a
                href=""
                class="text-sm font-normal text-blue-500 cursor-pointer  hover:text-blue-600 sm:text-lg"
              >
                {{ selectedBusinessNews.url }}
              </a>
            </div>
          </div>

          <div class="mx-auto mt-5 mb-5 border border-gray-200 max-w-7xl"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNewsStore } from '@/stores/news'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

let selectedBusinessNews = ref(null)

const route = useRoute()

const newsStore = useNewsStore()

getBusinessNewsDetails()

newsStore.fetchBusinessNews({})

function getBusinessNewsDetails() {
  const sources = newsStore.businessList.find((_i) => {
    if (_i.sources.id === route.params.id) {
      return _i
    }
  })
  selectedBusinessNews.value = sources
}
</script>
