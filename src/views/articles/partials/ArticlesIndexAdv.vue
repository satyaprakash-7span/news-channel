<template>
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
</template>

<script setup>
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
</script>
