<template>
  <div class="bg-white">
    <div class="">
      <div
        class="w-full h-auto mx-auto mt-16 mb-20 bg-gray-100 rounded-md shadow-md  sm:mt-24 max-w-7xl"
      >
        <div class="lg:px-4">
          <img
            src="@/assets/hd-news.jpeg"
            alt=""
            style="width: 100%"
            class="px-4 py-4 mt-2 border border-gray-300 rounded-md shadow-sm"
          />
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
              The washington
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
              Alex Costa
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
              New Title
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              expedita laboriosam modi nostrum vitae hic facilis assumenda nihil
              amet ipsa.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              placeat ex quo aut delectus nulla, libero tempora iusto earum,
              rerum quos a fuga obcaecati impedit quam distinctio voluptate quia
              iure.
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
                https://images.unsplash
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
              12 Dec 2021
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
// import { computed } from 'vue'

const newsStore = useNewsStore()
getNewsDetails()
function getNewsDetails() {
  newsStore.newsList
}
</script>
