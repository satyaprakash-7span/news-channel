<template>
  <div class="px-8 mt-12">
    <v-pagination
      v-model="newsStore.totalResults"
      :pages="5"
      :range-size="20"
      active-color="#efefef"
      class="text-sm"
      @update:modelValue="updateHandler"
    />
  </div>
</template>

<script setup>
import VPagination from '@hennge/vue3-pagination'
import '@hennge/vue3-pagination/dist/vue3-pagination.css'
import { ref } from 'vue'
import { useNewsStore } from '../stores/news'

const page = ref('')
const newsStore = useNewsStore()

fetchInitialData()

function fetchInitialData() {
  const res = newsStore.fetchNews()
  if (res.data) {
    page.value = res.data.totalResults
  }
}
</script>

<style scoped>
.PaginationControl {
  padding: 10px;
  display: flex;
  border: 1 solid lightgray;
  align-items: center;
}

.Page {
  display: flex;
  align-items: center;
  border: 1 px solid lightgray;
  justify-content: center;
  width: 35 px;
  padding: 9 px;
  margin: 0 1 px;
  color: #666666;
  background-color: transparent;
  font-size: 14px;
  border-radius: 3 px;
  box-sizing: border-box;
  cursor: pointer;
  outline: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
