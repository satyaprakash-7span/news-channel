<template>
  <div>
    <div class="z-20 w-full px-4 py-6 bg-gray-900 bg-opacity-70 ticker-wrap">
      <p
        v-for="(news, index) in newsStore.newsList"
        :key="index"
        class="space-x-3 text-lg font-semibold text-center text-white underline  sm:text-xl ticker"
      >
        {{ news.title }} {{ news.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useNewsStore } from '../stores/news'
const newsStore = useNewsStore()

fetchInitialData()

function fetchInitialData() {
  newsStore.fetchNews()
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
$duration: 30s;

@-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.ticker-wrap {
  position: fixed;
  top: 80%;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 4rem;
  background-color: rgba(#000, 0.9);
  padding-left: 100%;
  box-sizing: content-box;

  .ticker {
    display: inline-block;
    height: 4rem;
    line-height: 4rem;
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;

    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-name: ticker;
    animation-name: ticker;
    -webkit-animation-duration: $duration;
    animation-duration: $duration;

    &__item {
      display: inline-block;

      padding: 0 2rem;
      font-size: 2rem;
      color: white;
    }
  }
}

h1,
h2,
p {
  padding: 0 5%;
}
</style>
