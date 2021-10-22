<template>
  <div ref="searchBar" class="relative block rounded lg:block">
    <div>
      <div
        class="flex items-center justify-center flex-1 px-2  lg:mr-6 lg:justify-end"
      >
        <div class="w-full max-w-lg lg:max-w-lg">
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "
            >
              <SearchIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              id="search"
              name="search"
              class="block w-full py-3 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md  sm:py-2 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sms"
              v-model="name"
              placeholder="Search Articles..."
              @input="onSearch"
              type="search"
            />
          </div>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <div
        v-if="isShow"
        class="
          scrollbar-thin
          border border-gray-200
          scrollbar-thumb-rounded-full
          scrollbar-thumb-gray-300
          scrollbar-track-gray-100
          overflow-y-auto
          bg-white
          h-96
          rounded-md
          mt-2
          shadow-lg
          p-3
          absolute
          w-[300px]
          right-0
        "
      >
        <div v-if="newsStore.newsList.length > 0" class="mt-2">
          <div
            v-for="(news, index) in newsStore.newsList"
            :key="index"
            class="p-2 rounded-md cursor-pointer hover:bg-gray-100"
          >
            <router-link
              :to="{ path: `/news-view/${news.source.id}` }"
              class="flex items-center"
            >
              <div class="flex flex-col">
                <h3 class="text-xl font-semibold text-gray-600">
                  {{ news.title }}
                </h3>
                <p class="mt-2 text-sm font-normal text-gray-400">
                  {{ news.description }}
                </p>
              </div>
            </router-link>
          </div>

          <div class="mx-auto mt-4 mb-4 border border-gray-200 max-md"></div>
        </div>
        <div
          v-if="newsStore.newsList.length < 1"
          class="flex flex-col items-center justify-center mt-4 text-base text-gray-400 "
        >
          <ExclamationIcon class="w-6 h-6 text-gray-500" />
          <label class="block px-2 mb-2 text-sm text-gray-400 uppercase">
            No news found!
          </label>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { SearchIcon, ExclamationIcon } from '@heroicons/vue/outline'
import { ref, watch } from 'vue'
import { useNewsStore } from '../stores/news'
import { useRoute } from 'vue-router'
// import { debounce } from 'lodash'
export default {
  components: {
    SearchIcon,
    ExclamationIcon,
  },

  setup() {
    const newsStore = useNewsStore()
    const isShow = ref(false)
    const name = ref('')
    const searchBar = ref(null)
    const isSearching = ref(false)
    const route = useRoute()

    watch(route, () => {
      isShow.value = false
      name.value = ''
    })

    // onMounted(() => {
    //   onSearch = debounce(onSearch, 500)
    // })

    function onSearch() {
      let data = {
        search: name.value,
      }

      if (name.value) {
        isSearching.value = true
        newsStore.searchArticles(data).then(() => {
          isShow.value = true
        })
        isSearching.value = false
      }
      if (name.value === '') {
        isShow.value = false
      }
    }

    return {
      isShow,
      onSearch,
      searchBar,
      name,
      newsStore,
      isSearching,
    }
  },
}
</script>
