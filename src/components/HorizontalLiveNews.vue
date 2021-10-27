<template>
  <div class="">
    <div
      class="z-20 w-full h-20 px-4 py-4 overflow-hidden bg-white bg-no-repeat bg-cover rounded-md shadow-2xl  sm:rounded-none bg-opacity-20 back-img"
    >
      <div class="overflow-hidden vmove">
        <p
          v-for="(article, index) in newsStore.newsList"
          :key="index"
          class="h-10 space-y-6 text-lg font-semibold text-center text-white  vitem sm:text-xl"
        >
          {{ article.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNewsStore } from '../stores/news'
const newsStore = useNewsStore()

fetchInitialData()

function fetchInitialData() {
  newsStore.fetchArticles({ pagesize: 10 })
}
</script>

<style lang="css">
.vwrap,
.vitem {
  height: 30px;
  line-height: 30px;
}

/* (B) FIXED WRAPPER */
.vwrap {
  overflow: hidden; /* HIDE SCROLL BAR */
  background: #eee;
}
/* (C) TICKER ITEMS */
.vitem {
  text-align: center;
}

/* (D) ANIMATION - MOVE ITEMS FROM TOP TO BOTTOM */
/* CHANGE KEYFRAMES IF YOU ADD/REMOVE ITEMS */
.vmove {
  position: relative;
}
@keyframes tickerv {
  0% {
    bottom: 0;
  } /* FIRST ITEM */
  30% {
    bottom: 30px;
  } /* SECOND ITEM */
  60% {
    bottom: 60px;
  } /* THIRD ITEM */
  90% {
    bottom: 90px;
  } /* FORTH ITEM */
  100% {
    bottom: 0;
  } /* BACK TO FIRST */
}
.vmove {
  animation-name: tickerv;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1, 0, 0.5, 0);
}
.vmove:hover {
  animation-play-state: paused;
}
.back-img {
  background-image: url('../assets/hd-news-2.jpeg');
}
</style>
