<template>
  <div class="mt-24 overflow-hidden bg-gray-50">
    <div class="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div class="lg:col-span-1">
          <h2
            class="text-3xl font-extrabold tracking-tight text-gray-900  sm:text-4xl"
          >
            A better way to be update the news.
          </h2>
        </div>
        <dl
          class="mt-10 space-y-10  sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2"
        >
          <div v-for="feature in features" :key="feature.name">
            <dt>
              <div
                class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md "
              >
                <component
                  :is="feature.icon"
                  class="w-6 h-6"
                  aria-hidden="true"
                />
              </div>
              <p class="mt-5 text-lg font-medium leading-6 text-gray-900">
                {{ feature.name }}
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="max-w-5xl mx-auto border border-gray-200"></div>

    <div
      class="px-4 py-6 mx-auto mt-12 mb-10 bg-gray-200 rounded-md shadow-md  sm:mt-20 max-w-7xl sm:px-6"
    >
      <h1 class="text-lg font-bold text-center sm:text-5xl">
        Latest Updated Articles
      </h1>

      <div class="mx-auto mt-6 mb-6 border border-gray-300 max-w-7xl"></div>

      <div>
        <div
          class="grid w-full grid-cols-1 gap-8 py-6  sm:grid-cols-2 lg:grid-cols-3"
        >
          <router-link
            :to="`articles/${articles.id}/view`"
            class="relative transition-all duration-700 transform bg-white rounded-md shadow-sm cursor-pointer  hover:bg-gray-100 hover:rounded-md group rounded-t-md hover:shadow-2xl motion-reduce:transform-none hover:border hover:border-gray-400"
            v-for="(articles, index) in newsStore.articlesList"
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
                  {{ articles.title }}
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
                  v-if="articles.description"
                  class="mt-2 text-sm font-normal text-gray-500"
                >
                  {{ articles.description }}
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useNewsStore } from '@/stores/news'
import {
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from '@heroicons/vue/outline'
const features = [
  {
    name: 'Competitive News',
    description:
      'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Sport News',
    description:
      'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Instant News',
    description:
      'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Politics News',
    description:
      'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
    icon: MailIcon,
  },
]
// store
const newsStore = useNewsStore()

onMounted(() => {
  fetchInitialData()
})

// methods
function fetchInitialData() {
  newsStore.fetchArticles({
    q: 'Apple',
    from: '2021-10-20',
    sortBy: 'popularity',
  })
}
</script>
