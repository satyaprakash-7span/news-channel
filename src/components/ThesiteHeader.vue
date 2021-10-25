<template>
  <Popover class="relative w-full">
    <div class="absolute inset-0 z-30 pointer-events-none" aria-hidden="true" />
    <div
      class="flex items-center"
      :class="[
        {
          'shadow-xl bg-transparent lg:px-16 transition-all duration-700 transform ease-in  transparent-navbar z-1':
            isScroll,
        },
        'fixed top-0 left-0 z-40 w-full transition-all duration-700 ease-in-out transform scroll-navbar bg-white ',
      ]"
    >
      <div
        class="flex items-center justify-between w-full px-4 py-5  sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10"
      >
        <!-- website logo -->
        <div v-if="!isOpen">
          <a
            href="/"
            class="hidden px-4 py-2 font-serif text-xl font-bold text-blue-500 transition-all duration-300 transform border border-blue-500 border-solid shadow-md  md:px-2 md:text-xl border-ring-2 sm:block hover:rounded-500 hover:text-yellow-500 hover:bg-gray-100 hover:scale-90 hover:shadow-lg xl:text-3xl"
          >
            News Channel
          </a>
          <a
            href="/"
            class="block text-xl font-bold text-blue-500 border-t-2 border-blue-600  hover:text-blue-600 sm:hidden"
          >
            WNC
          </a>
        </div>

        <!-- Mobile Search Button Toggle -->
        <div
          class="flex items-center px-4 py-3  hover:rounded-md hover:bg-gray-100 sm:hidden"
        >
          <button @click="isOpen = !isOpen">
            <label v-if="!isOpen" class="text-lg font-normal text-gray-400">
              Search...
            </label>
            <XIcon v-if="isOpen" class="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <!-- Mobile Search Input -->
        <transition
          v-show="isOpen"
          enter-active-class="transition duration-700 ease-out"
          enter-from-class="-translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="-translate-y-1 opacity-0"
        >
          <div class="w-full">
            <GlobalSearchNews class="z-40" />
          </div>
        </transition>

        <!-- Mobile menu toggle  -->
        <div class="-my-2 -mr-2 md:hidden" v-if="!isOpen">
          <PopoverButton
            class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="w-6 h-6" aria-hidden="true" />
          </PopoverButton>
        </div>

        <div
          class="hidden  md:flex-1 stroke md:flex md:items-center md:justify-center"
        >
          <PopoverGroup as="nav" class="flex space-x-10">
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group lg:text-xl sm:text-lg  bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                ]"
              >
                <span>About</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500',
                  ]"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="-translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="-translate-y-1 opacity-0"
              >
                <PopoverPanel
                  class="absolute inset-x-0 z-10 hidden transform bg-white shadow-lg  md:block top-full"
                >
                  <div class="bg-gray-50">
                    <div
                      class="px-4 py-5 mx-auto space-y-6  max-w-7xl sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8"
                    >
                      <div
                        v-for="item in callsToAction"
                        :key="item.name"
                        class="flow-root"
                      >
                        <a
                          :href="item.href"
                          class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md  hover:bg-gray-100"
                        >
                          <component
                            :is="item.icon"
                            class="flex-shrink-0 w-6 h-6 text-gray-400"
                            aria-hidden="true"
                          />
                          <span class="ml-3">{{ item.name }}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>

            <router-link
              to="/articles/articles-index"
              class="text-base font-medium text-gray-500  stroke lg:text-lg sm:text-lg hover:text-gray-900"
            >
              Articles
            </router-link>
            <router-link
              to="/news/news-index"
              class="text-base font-medium text-gray-500  stroke lg:text-xl sm:text-lg hover:text-gray-900"
            >
              News
            </router-link>

            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-white stroke lg:text-xl sm:text-lg  rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                ]"
              >
                <span>More</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500',
                  ]"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="-translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="-translate-y-1 opacity-0"
              >
                <PopoverPanel
                  class="absolute inset-x-0 z-10 hidden transform shadow-lg  md:block top-full"
                >
                  <div class="absolute inset-0 flex">
                    <div class="w-1/2 bg-white" />
                    <div class="w-1/2 bg-gray-50" />
                  </div>
                  <div
                    class="relative grid grid-cols-1 mx-auto  max-w-7xl lg:grid-cols-2"
                  >
                    <nav
                      class="grid px-4 py-8 bg-white  gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                    >
                      <div>
                        <h3
                          class="text-sm font-medium tracking-wide text-gray-500 uppercase "
                        >
                          Company
                        </h3>
                        <ul role="list" class="mt-5 space-y-6">
                          <li
                            v-for="item in company"
                            :key="item.name"
                            class="flow-root"
                          >
                            <a
                              :href="item.href"
                              class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md  hover:bg-gray-50"
                            >
                              <component
                                :is="item.icon"
                                class="flex-shrink-0 w-6 h-6 text-gray-400"
                                aria-hidden="true"
                              />
                              <span class="ml-4">{{ item.name }}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3
                          class="text-sm font-medium tracking-wide text-gray-500 uppercase "
                        >
                          Resources
                        </h3>
                        <ul role="list" class="mt-5 space-y-6">
                          <li
                            v-for="item in resources"
                            :key="item.name"
                            class="flow-root"
                          >
                            <a
                              :href="item.href"
                              class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md  hover:bg-gray-50"
                            >
                              <component
                                :is="item.icon"
                                class="flex-shrink-0 w-6 h-6 text-gray-400"
                                aria-hidden="true"
                              />
                              <span class="ml-4">{{ item.name }}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div
                      class="px-4 py-8  bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12"
                    >
                      <div>
                        <h3
                          class="text-sm font-medium tracking-wide text-gray-500 uppercase "
                        >
                          From the blog
                        </h3>
                        <ul role="list" class="mt-6 space-y-6">
                          <li
                            v-for="post in blogPosts"
                            :key="post.id"
                            class="flow-root"
                          >
                            <a
                              :href="post.href"
                              class="flex p-3 -m-3 rounded-lg hover:bg-gray-100"
                            >
                              <div class="flex-shrink-0 hidden sm:block">
                                <img
                                  class="object-cover w-32 h-20 rounded-md"
                                  :src="post.imageUrl"
                                  alt=""
                                />
                              </div>
                              <div class="flex-1 w-0 sm:ml-8">
                                <h4
                                  class="text-base font-medium text-gray-900 truncate "
                                >
                                  {{ post.name }}
                                </h4>
                                <p class="mt-1 text-sm text-gray-500">
                                  {{ post.preview }}
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-6 text-sm font-medium">
                        <router-link
                          to="/articles/articles-index"
                          class="text-indigo-600 hover:text-indigo-500"
                        >
                          View all Articles
                          <span aria-hidden="true">&rarr;</span>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
        </div>
      </div>

      <!-- Mobile menu item -->
      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <PopoverPanel
          focus
          class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform  md:hidden"
        >
          <div
            class="bg-white divide-y-2 rounded-lg shadow-lg  ring-1 ring-black ring-opacity-5 divide-gray-50"
          >
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <a
                    href="/"
                    class="block text-xl font-bold text-blue-500 border-t-2 border-blue-600  hover:text-blue-600 sm:hidden"
                  >
                    WNC
                  </a>
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>
                    <XIcon class="w-6 h-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <img
                    src="@/assets/hd-news.jpeg"
                    class="w-full px-2 py-2 transition-all duration-500 ease-in transform  hover:border hover:border-gray-400 h-50"
                  />

                  <a
                    v-for="item in solutions"
                    :key="item.name"
                    :href="item.href"
                    class="flex items-center p-3 -m-3 rounded-md  hover:bg-gray-50"
                  >
                    <component
                      :is="item.icon"
                      class="flex-shrink-0 w-6 h-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span class="ml-3 text-base font-medium text-gray-900">
                      {{ item.name }}
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div class="px-5 py-6 space-y-6">
              <div class="grid grid-cols-2 mb-12 gap-y-4 gap-x-8">
                <router-link
                  to="/news/news-index"
                  class="text-base font-medium text-gray-900  hover:text-gray-700"
                >
                  News
                </router-link>

                <router-link
                  to="/articles/articles-index"
                  class="text-base font-medium text-gray-900  hover:text-gray-700"
                >
                  Articles
                </router-link>
                <a
                  v-for="item in resources"
                  :key="item.name"
                  :href="item.href"
                  class="text-base font-medium text-gray-900  hover:text-gray-700"
                >
                  {{ item.name }}
                </a>
              </div>
            </div>

            <div
              class="absolute px-6 py-4 mt-4 text-center text-gray-500 bg-gray-200  bottom-1 left-2 right-2 rounded-b-md"
            >
              ALL HEAD LINE NEWS
            </div>
          </div>
        </PopoverPanel>
      </transition>

      <!-- Search News -->
      <GlobalSearchNews class="hidden lg:block" />
    </div>
  </Popover>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  SearchIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import GlobalSearchNews from './GlobalSearchNews.vue'
import { ref, onMounted } from 'vue'
const callsToAction = [
  { name: 'Watch News', href: '#', icon: PlayIcon },
  { name: 'View All News', href: '#', icon: CheckCircleIcon },
  { name: 'Contact For News', href: '#', icon: PhoneIcon },
]
const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  { name: 'Webinars', href: '#', icon: DesktopComputerIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    GlobalSearchNews,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    SearchIcon,
    XIcon,
  },
  setup() {
    // const isActive = ref(false)
    const isScroll = ref(false)
    const isOpen = ref(false)

    onMounted(() => {
      window.document.onscroll = () => {
        const navBar = document.getElementById('nav')
        if (window.scrollY > navBar.offsetTop) {
          isScroll.value = true
        } else {
          isScroll.value = false
        }
      }
    })

    return {
      callsToAction,
      company,
      resources,
      blogPosts,
      isScroll,
      isOpen,
    }
  },
}
</script>

<style lang="css">
/* Sticky header   */
.scroll-navbar {
  transition: all 300ms ease-in;
  padding: 0.5rem 0.2rem;
}

.transparent-navbar {
  transition: all 300ms ease-in-out;
  padding: 0rem 0rem;
}

a:after,
a:before {
  transition: all 0.5s;
}

.stroke a,
.fill a {
  position: relative;
}
.stroke a:after,
.fill a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 10px;
  margin: auto;
  width: 0%;
  content: '.';
  top: 86px;
  color: transparent;
  background: #2659e3;
  height: 2px;
}
.stroke a:hover:after {
  width: 100%;
}

@media screen and (min-width: 560px) {
  .transparent-navbar {
    transition: all 300ms ease-in-out;
    padding: 0rem 0rem;
  }

  .scroll-navbar {
    transition: all 300ms ease-in;
  }
}
</style>
