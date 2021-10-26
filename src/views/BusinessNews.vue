<template>
  <div>
    <h1
      class="mt-12 font-serif text-xl font-bold text-center text-gray-900  sm:mt-24 sm:text-2xl lg:text-5xl"
    >
      Top Business Sources News
    </h1>
    <div
      class="w-full px-4 py-5 mt-10 rounded-md shadow-md  sm:py-8 sm:px-12 sm:rounded-none bg-gray-50"
    >
      <div class="grid h-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="(business, index) in newsStore.businessList"
          :key="index"
          class="px-2 transition-all duration-300 bg-white shadow-2xl  hover:shadow-none hover:rounded-md hover:bg-transparent hover:border hover:border-blue-500 group"
          :to="`/business-view/${business.id}`"
        >
          <div class="px-4 py-3">
            <h1
              class="mt-4 text-base font-bold text-gray-600 uppercase  group-hover:text-indigo-500 sm:text-xl lg:text-2xl"
            >
              {{ business.name }}
            </h1>

            <div
              class="mx-auto mt-4 mb-4 border border-gray-200 border-solid  border-1 max-w-7xl"
            ></div>

            <div class="flex items-center justify-between">
              <div
                class="mt-4 text-base font-normal text-gray-500 text-green-600 uppercase  group-hover:text-gray-900"
              >
                ID:
                <span class="text-gray-500">
                  {{ business.id }}
                </span>
              </div>
              <div
                class="mt-4 text-base font-normal text-blue-600  group-hover:text-gray-900"
              >
                CATEGORY:
                <span class="text-gray-500">
                  {{ business.category }}
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div
                class="mt-4 text-base font-normal text-yellow-500  group-hover:text-gray-900"
              >
                COUNTRY:
                <span class="text-gray-500">
                  {{ business.country }}
                </span>
              </div>
              <div
                class="mt-4 text-base font-normal text-yellow-500  group-hover:text-gray-900"
              >
                LANGUAGE:
                <span class="text-gray-500">
                  {{ business.language }}
                </span>
              </div>
            </div>
            <p
              class="mt-4 text-base font-normal text-gray-900  group-hover:text-gray-500"
            >
              DESCRIPTION:
              <span class="text-gray-500 group-hover:text-gray-900">
                {{ business.description }}
              </span>
            </p>

            <div
              class="mx-auto mt-4 mb-4 border border-gray-200 max-w-7xl"
            ></div>

            <div class="mt-4">
              <a
                :href="business.url"
                class="mb-4 space-x-3 text-base font-normal text-blue-500  group-hover:text-blue-600"
              >
                Link: {{ business.url }}
              </a>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNewsStore } from '../stores/news'
// store
const newsStore = useNewsStore()

fetchInitialData()

// methods
function fetchInitialData() {
  newsStore.fetchBusinessNews()
}
</script>
