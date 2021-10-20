<template>
  <Popover class="relative w-full bg-white">
    <div class="absolute inset-0 z-30 pointer-events-none" aria-hidden="true" />
    <div class="z-10">
      <div
        class="fixed top-0 z-20 flex items-center justify-between w-full px-4 py-5 bg-white shadow-lg  sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10"
      >
        <!-- website logo -->
        <div>
          <a
            href="/"
            class="hidden px-4 py-2 font-serif text-xl font-bold text-blue-500 transition-all duration-300 transform border border-blue-500 border-solid shadow-md  border-ring-2 sm:block hover:rounded-500 hover:text-yellow-500 hover:bg-gray-100 hover:scale-90 hover:shadow-lg lg:text-3xl"
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

        <!-- Mobile menu toggle  -->
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="w-6 h-6" aria-hidden="true" />
          </PopoverButton>
        </div>

        <div class="hidden md:flex-1 md:flex md:items-center md:justify-center">
          <PopoverGroup as="nav" class="flex space-x-10">
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
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
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Articles
            </router-link>
            <router-link
              to="/news/news-index"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Latest News
            </router-link>

            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
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
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-500"
                        >
                          View all Articles
                          <span aria-hidden="true">&rarr;</span></a
                        >
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
        </div>

        <!-- Search News -->
        <GlobalSearchNews class="" />
      </div>
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
    XIcon,
  },
  setup() {
    return {
      callsToAction,
      company,
      resources,
      blogPosts,
    }
  },
}
</script>
