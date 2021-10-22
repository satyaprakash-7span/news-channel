<template>
  <div class="w-full overflow-auto">
    <div class="relative py-16 mt-12 bg-white">
      <div
        class="absolute top-0 hidden h-1/2 bg-gray-50 lg:block"
        aria-hidden="true"
      />
      <div class="mx-auto bg-indigo-600 max-w-7xl lg:bg-transparent lg:px-8">
        <div class="lg:grid lg:grid-cols-12">
          <div
            class="relative z-10  lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent"
          >
            <div
              class="absolute h-1/2 bg-gray-50 lg:hidden"
              aria-hidden="true"
            />
            <div
              class="max-w-md px-4 mx-auto  sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0"
            >
              <div
                class=" aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1"
              >
                <img
                  style="width: 300px"
                  class="hidden object-contain object-center shadow-2xl  w-50 h-50 lg:block rounded-3xl"
                  src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            class="relative bg-indigo-600  lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center"
          >
            <div
              class="absolute hidden overflow-hidden rounded-3xl lg:block"
              aria-hidden="true"
            >
              <svg
                class="absolute transform  bottom-full left-full translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-indigo-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="384"
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
              <svg
                class="absolute transform  top-full -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-indigo-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="384"
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
            </div>
            <div
              class="relative max-w-md px-4 py-12 mx-auto space-y-6  sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-3 lg:col-span-6"
            >
              <h2 class="text-3xl font-extrabold text-white" id="join-heading">
                Present your News to the public
              </h2>
              <p class="text-lg text-white">
                Varius facilisi mauris sed sit. Non sed et duis dui leo,
                vulputate id malesuada non. Cras aliquet purus dui laoreet diam
                sed lacus, fames. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Porro vitae totam soluta impedit provident
                consectetur architecto optio placeat, sequi exercitationem in
                aliquam esse eveniet maxime eaque corporis quia voluptates
                ratione libero a, molestiae illum possimus ea quaerat!
                Voluptatum aliquam ea iure asperiores facilis dolorum voluptas
                at exercitationem, nulla numquam tempora ut necessitatibus esse
                reprehenderit totam magni quisquam, amet sunt. Aliquam fugiat
                illum hic nihil ipsa earum id molestias modi sed error delectus
                incidunt, tempora, ea exercitationem? Magnam error mollitia
                perspiciatis nesciunt facilis minima sint laudantium beatae enim
                ullam. Quos quia debitis earum aspernatur laboriosam sit
                similique magni laborum nam necessitatibus!
              </p>
              <router-link
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md  hover:bg-indigo-200"
                to="/news-create"
              >
                <PlusIcon class="w-6 h-6 mr-3" />
                Add News
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Updated latest News -->
    <div
      class="px-4 py-6 mx-auto mt-12 mb-10 bg-gray-200 rounded-md shadow-md  sm:mt-20 max-w-7xl sm:px-6"
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
            class="relative transition-all duration-700 transform bg-white rounded-md shadow-sm cursor-pointer  hover:bg-gray-100 hover:rounded-md group rounded-t-md hover:shadow-2xl motion-reduce:transform-none hover:border hover:border-gray-400"
            :key="index"
          >
            <div class="px-4 py-3">
              <div class="mt-2">
                <label class="text-base font-semibold text-gray-600 uppercase">
                  Title
                </label>
                <div
                  class="max-w-md mx-auto mt-2 mb-2 border border-gray-200"
                ></div>
                <h3
                  class="mt-2 text-lg font-medium text-gray-900  group-hover:text-indigo-500 sm:text-xl"
                >
                  {{ news.title }}
                </h3>
              </div>

              <div class="pb-2 mt-4">
                <label class="text-base font-semibold text-gray-600 uppercase">
                  Description
                </label>
                <div
                  class="max-w-md mx-auto mt-2 mb-2 border border-gray-200"
                ></div>
                <p
                  v-if="news.description"
                  class="mt-2 text-sm font-normal text-gray-500"
                >
                  {{ news.description }}
                </p>
                <p class="mt-2 text-sm font-normal text-gray-500" v-else>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  alias, molestiae fugit quasi numquam explicabo aliquam? Esse
                  excepturi veritatis provident.
                </p>
              </div>
            </div>
          </router-link>
        </div>
        <div
          v-if="newsStore.newsList.length < 1"
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
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { PlusIcon, ExclamationIcon } from '@heroicons/vue/solid'
import { useNewsStore } from '@/stores/news'

const newsStore = useNewsStore()

onMounted(() => {
  fetchInitialData()
})

// methods
function fetchInitialData() {
  newsStore.fetchNews({
    country: 'us',
    apiKey: 'ad6b3b0aa2344462a60eac0448d4816e',
  })
}
</script>
