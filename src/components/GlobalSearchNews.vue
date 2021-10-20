<template>
  <div ref="searchBar" class="relative hidden rounded lg:block">
    <div>
      <div
        class="flex items-center justify-center flex-1 px-2  lg:ml-6 lg:justify-end"
      >
        <div class="w-full max-w-lg lg:max-w-xs">
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "
            >
              <SearchIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              id="search"
              name="search"
              class="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md  focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              v-model="name"
              placeholder="Search..."
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
          scrollbar-thumb-rounded-full
          scrollbar-thumb-gray-300
          scrollbar-track-gray-100
          overflow-y-auto
          bg-white
          rounded-md
          mt-2
          shadow-lg
          p-3
          absolute
          w-[300px]
          h-[200px]
          right-0
        "
      >
        <div v-if="newsStore.newsList.length > 0" class="mt-2">
          <label class="text-sm text-gray-400 mb-2 block px-2 mb-0.5 uppercase">
            No news found!
            <ExclamationIcon />
          </label>
          <div
            v-for="(news, index) in newsStore.newsList"
            :key="index"
            class="p-2 rounded-md cursor-pointer hover:bg-gray-100"
          >
            <router-link
              :to="{ path: `news/${news.id}/view` }"
              class="flex items-center"
            >
              <div class="flex flex-col">
                <span class="text-sm">{{ news.name }}</span>
                <span class="text-xs text-gray-400"
                  >{{ news.description }}
                </span>
              </div>
            </router-link>
          </div>
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

    // onSearch = debounce(onSearch, 500)

    function onSearch() {
      let data = {
        search: name.value,
      }

      console.log('onSearch => ', data)
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
