<template>
  <div class="px-4 py-16 mx-auto mt-12 max-w-7xl sm:py-24 sm:px-6 lg:px-8">
    <!-- header section -->
    <div class="text-center">
      <h2
        class="text-base font-semibold tracking-wide text-indigo-600 uppercase  sm:text-2xl"
      >
        Your News
      </h2>

      <p class="max-w-xl mx-auto mt-5 text-xl text-gray-500">
        This form is use to create a user new News based on the given required
        details!
      </p>
    </div>
  </div>

  <div
    class="mx-auto mt-4 mb-8 border border-2 border-gray-200 border-solid  max-w-7xl"
  ></div>

  <div class="px-4 mx-auto space-y-6 sm:px-6 max-w-7xl">
    <div class="px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            News Information
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            Add Basic news related details.
          </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="submit" @click="submitNewsData">
            <div class="w-full sm:max-w-lg">
              <label
                for="title"
                class="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                v-model="title"
                name="title"
                id="title"
                autocomplete="false"
                class="block w-full px-6 py-3 mt-1 border border-gray-300 border-indigo-500 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div class="w-full mt-4 sm:mt-6 sm:max-w-lg">
              <label
                for="first-name"
                class="block text-sm font-medium text-gray-700"
              >
                Descriptiom
              </label>
              <textarea
                v-model="description"
                id="description"
                name="description"
                rows="3"
                autocomplete="false"
                class="block w-full px-6 py-3 mt-1 border border-gray-300 border-indigo-500 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="flex justify-end sm:px-8">
      <button
        type="submit"
        class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <SaveIcon class="w-5 h-5 mr-4" />
        Save
      </button>
    </div>
  </div>
</template>

<script setup>
import { SaveIcon } from '@heroicons/vue/solid'
import { useNewsStore } from '@/stores/news'
// import { useRouter } from 'vue-router'
import { ref } from 'vue'

const newsStore = useNewsStore()
// const router = useRouter()
let isSaving = ref(false)
let title = ref('')
let description = ref('')

// methods
async function submitNewsData() {
  //   isSaving.value = true
  try {
    let data = {
      //   title: title.value,
      //   description: description.value,
      ...newsStore.newsData,
    }
    await newsStore.addNews(data)
  } catch (err) {
    isSaving.value = false
    return ''
  }
  //   router.push('/news/news-index')
}
</script>
