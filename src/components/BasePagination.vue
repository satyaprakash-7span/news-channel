<template>
  <div
    v-if="shouldShowPagination"
    class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200  sm:px-6"
  >
    <div class="flex justify-between flex-1 sm:hidden">
      <a
        href="#"
        :class="{
          'disabled cursor-normal pointer-events-none !bg-gray-100 !text-gray-400':
            pagination.currentPage === 1,
        }"
        class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md  hover:bg-gray-50"
        @click="pageClicked(pagination.currentPage - 1)"
      >
        Previous
      </a>
      <a
        href="#"
        :class="{
          'disabled cursor-default pointer-events-none !bg-gray-100 !text-gray-400':
            pagination.currentPage === pagination.totalPages,
        }"
        class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md  hover:bg-gray-50"
        @click="pageClicked(pagination.currentPage + 1)"
      >
        Next
      </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          {{ ' ' }}
          <span
            v-if="pagination.limit && pagination.currentPage"
            class="font-medium"
          >
            {{
              pagination.currentPage * pagination.limit - (pagination.limit - 1)
            }}
          </span>
          {{ ' ' }}
          to
          {{ ' ' }}
          <span
            v-if="pagination.limit && pagination.currentPage"
            class="font-medium"
          >
            <span
              v-if="
                pagination.currentPage * pagination.limit <=
                pagination.totalCount
              "
            >
              {{ pagination.currentPage * pagination.limit }}
            </span>
            <span v-else>
              {{ pagination.totalCount }}
            </span>
          </span>
          {{ ' ' }}
          of
          {{ ' ' }}
          <span v-if="pagination.totalCount" class="font-medium">
            {{ pagination.totalCount }}
          </span>
          {{ ' ' }}
          results
        </p>
      </div>
      <div>
        <nav
          class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <a
            href="#"
            :class="{
              'disabled cursor-normal pointer-events-none !bg-gray-100 !text-gray-400':
                pagination.currentPage === 1,
            }"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  rounded-l-md hover:bg-gray-50"
            @click="pageClicked(pagination.currentPage - 1)"
          >
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            v-if="hasFirst"
            href="#"
            aria-current="page"
            :class="{
              'z-10 bg-primary-50 border-primary-500 text-primary-600':
                isActive(1),
              'bg-white border-gray-300 text-gray-500 hover:bg-gray-50':
                !isActive(1),
            }"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium border "
            @click="pageClicked(1)"
          >
            1
          </a>

          <span
            v-if="hasFirstEllipsis"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 "
          >
            ...
          </span>
          <a
            v-for="page in pages"
            :key="page"
            href="#"
            :class="{
              'z-10 bg-primary-50 border-primary-500 text-primary-600':
                isActive(page),
              'bg-white border-gray-300 text-gray-500 hover:bg-gray-50':
                !isActive(page),
              disabled: page === '...',
            }"
            class="relative items-center hidden px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-gray-50 md:inline-flex"
            @click="pageClicked(page)"
          >
            {{ page }}
          </a>

          <span
            v-if="hasLastEllipsis"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 "
          >
            ...
          </span>
          <a
            v-if="hasLast"
            href="#"
            aria-current="page"
            :class="{
              'z-10 bg-primary-50 border-primary-500 text-primary-600':
                isActive(pagination.totalPages),
              'bg-white border-gray-300 text-gray-500 hover:bg-gray-50':
                !isActive(pagination.totalPages),
            }"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium border "
            @click="pageClicked(pagination.totalPages)"
          >
            {{ pagination.totalPages }}
          </a>
          <a
            href="#"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  rounded-r-md hover:bg-gray-50"
            :class="{
              'disabled cursor-default pointer-events-none !bg-gray-100 !text-gray-400':
                pagination.currentPage === pagination.totalPages,
            }"
            @click="pageClicked(pagination.currentPage + 1)"
          >
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="w-5 h-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'
import { computed, defineEmits, defineProps } from 'vue'

const props = defineProps({
  pagination: {
    type: Object,
    default: () => ({}),
  },
})

const page = computed(() => {
  return props.pagination.totalPages === undefined ? [] : pageLinks()
})

const emit = defineEmits(['pageChange', 'page'])

// const hasFirstpage = computed(() => {
//   return props.pagination.currentPage >= 4 || props.pagination.totalPages < 10
// })
const hasLast = computed(() => {
  return (
    props.pagination.currentPage <= props.pagination.totalPages - 3 ||
    props.pagination.totalPages < 10
  )
})

const hasFirstEllipsis = computed(() => {
  return props.pagination.currentPage >= 4 && props.pagination.totalPages >= 10
})
const hasLastEllipsis = computed(() => {
  return (
    props.pagination.currentPage <= props.pagination.totalPages - 3 &&
    props.pagination.totalPages >= 10
  )
})
const shouldShowPagination = computed(() => {
  if (props.pagination.totalPages === undefined) {
    return false
  }
  if (props.pagination.count === 0) {
    return false
  }
  return props.pagination.totalPages > 1
})

function isActive(page) {
  const currentPage = props.pagination.currentPage || 1
  return currentPage === page
}
function pageClicked(page) {
  if (
    page === '...' ||
    page === props.pagination.currentPage ||
    page > props.pagination.totalPages ||
    page < 1
  )
    emit('pageChange', page)
}

function pageLinks() {
  const pages = []
  let left = 2
  let right = props.pagination.totalPages - 1
  if (props.pagination.totalPages >= 10) {
    left = Math.max(1, props.pagination.currentPage - 2)
    right = Math.min(
      props.pagination.currentPage + 2,
      props.pagination.totalPages
    )
  }
  for (let i = left; i <= right; i++) {
    pages.push(i)
  }
  return pages
}
</script>
