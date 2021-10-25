<template>
  <div class="bg-white">
    <main>
      <!-- News Advertise slider -->
      <news-slider class="mt-12" />

      <!-- Hero section -->
      <HeroSection />

      <!-- Hero  News adv -->
      <HeroAdv />

      <!-- CTA Section -->
      <NewsCta />

      <!-- Category news -->
      <CategoryNews class="mt-12 sm:mt-24" />

      <div class="w-full mx-auto mt-20 border border-gray-200 max-w-7xl"></div>

      <!-- Top headlines News cards-->
      <div>
        <div class="mt-12 sm:mt-20">
          <h1
            class="font-sans text-xl font-semibold text-center text-gray-600  sm:text-3xl lg:text-5xl sm:text-bold"
          >
            Latest worldwide Top Headlines News.
          </h1>

          <p
            class="max-w-2xl px-5 mx-auto mt-4 text-sm font-normal text-center text-gray-500  sm:px-0 sm:text-base"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quis
            corporis fugit nemo reiciendis fuga accusamus voluptates nisi,
            tenetur labore?
          </p>
        </div>

        <div
          class="w-full px-6 mt-12 bg-gray-100  sm:mx-auto sm:rounded-md sm:max-w-7xl"
        >
          <div
            v-if="newsStore.newsList.length > 1"
            class="grid w-full grid-cols-1 gap-8 py-6  sm:grid-cols-2 lg:grid-cols-3"
          >
            <router-link
              :to="`/news-view/${news.source.id}`"
              v-for="(news, index) in newsStore.newsList"
              :key="index"
              class="relative transition-all duration-700 transform bg-white shadow-sm cursor-pointer  hover:rounded-b-md group rounded-t-md hover:shadow-xl motion-reduce:transform-none"
            >
              <div class="overflow-hidden group-hover:rounded-t-md">
                <img
                  src="@/assets/hd-news.jpeg"
                  v-if="!news.urlToImage"
                  class="transition duration-1000 transform cursor-pointer  hover:scale-150"
                />
                <img
                  v-else
                  class="object-cover w-full h-48 transition duration-1000 transform cursor-pointer  hover:scale-150"
                  :src="news.urlToImage"
                  alt=""
                />
              </div>
              <div class="">
                <div class="px-4 py-4">
                  <h3
                    class="text-lg font-medium text-gray-700 cursor-pointer  group-hover:text-white group-hover:text-indigo-600"
                  >
                    {{ news.title }}
                  </h3>
                  <p
                    v-if="news.description"
                    class="mt-2 text-base font-normal text-gray-500 truncate  group-hover:text-white"
                  >
                    {{ news.description }}
                  </p>
                  <p
                    v-else
                    class="mt-2 text-base font-normal text-gray-500 truncate  group-hover:text-white"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, saepe.
                  </p>
                </div>
              </div>
            </router-link>
          </div>
          <div
            v-if="!newsStore.newsList.length"
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
    </main>

    <TheSiteFooter />
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import NewsSlider from './NewsSlider.vue'
import CategoryNews from './CategoryNews.vue'
import HeroAdv from './HeroAdv.vue'
import HeroSection from './HeroSection.vue'
import NewsCta from './NewsCta.vue'
import TheSiteFooter from '../components/TheSiteFooter.vue'
import { ExclamationIcon } from '@heroicons/vue/outline'
import { useNewsStore } from '../stores/news'
import VPagination from '@hennge/vue3-pagination'
import '@hennge/vue3-pagination/dist/vue3-pagination.css'

export default {
  components: {
    TheSiteFooter,
    ExclamationIcon,
    CategoryNews,
    NewsSlider,
    VPagination,
    HeroAdv,
    HeroSection,
    NewsCta,
  },

  setup() {
    const newsStore = useNewsStore()

    fetchInitialData()

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
      newsStore.fetchNews({ pageSize: 6, page })
    }

    function updateHandler() {
      const current = page.value + 1
      newsStore.fetchNews({ pageSize: 6, page: current })
    }

    return {
      newsStore,
      page,
      updateHandler,
      totalPages,
    }
  },
}
</script>
