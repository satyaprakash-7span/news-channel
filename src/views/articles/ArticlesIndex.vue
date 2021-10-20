<template>
  <div class="mt-24 overflow-hidden bg-gray-50">
    <div class="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <svg
        class="absolute top-0 transform -translate-x-1/2  left-full -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
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
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
        />
      </svg>

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
    <div
      class="px-4 py-6 mx-auto mt-32 mb-10 bg-gray-200 rounded-md shadow-md  max-w-7xl sm:px-6"
    >
      <h1 class="text-lg font-bold text-center sm:text-2xl">
        Latest Updated Articles
      </h1>
    </div>
    <div
      class=""
      v-for="(articles, index) in newsStore.articlesList"
      :key="index"
    >
      <div
        class="grid grid-cols-1 gap-4 px-4 py-2 mt-4 bg-white border border-gray-600 rounded-md shadow-sm  sm:grid-cols-3 sm:gap-8"
      >
        <div class="flex items-center space-x-4">
          <label class="text-base font-semibold uppercase">Title</label>
          <h3 class="mt-2 text-sm font-medium text-gray-600">
            {{ articles.title }}
          </h3>
        </div>

        <div class="flex items-center space-x-4">
          <label class="text-base font-semibold uppercase">Description</label>
          <p class="mt-4 text-sm font-normal text-gray-400">
            {{ articles.description }}
          </p>
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
