<template>
  <div class="bg-white">
    <main>
      <!-- News Advertise slider -->
      <NewsSlider class="mt-12" />

      <!-- Hero section -->
      <HeroSection />

      <!-- Hero News adv -->
      <HeroAdv />

      <!-- CTA Section -->
      <NewsCta />

      <!-- Category news -->
      <CategoryNews class="mt-12 sm:mt-24" />

      <div class="w-full mx-auto mt-20 border border-gray-200 max-w-7xl"></div>

      <!-- Top headlines News cards-->
      <TopHeadline />
    </main>

    <TheSiteFooter />
  </div>
</template>

<script>
import NewsSlider from './NewsSlider.vue'
import CategoryNews from './CategoryNews.vue'
import HeroSection from './HeroSection.vue'
import TheSiteFooter from '../components/TheSiteFooter.vue'
import NewsCta from './NewsCta.vue'
import HeroAdv from './HeroAdv.vue'
import TopHeadline from './TopHeadline.vue'

export default {
  components: {
    TheSiteFooter,
    CategoryNews,
    NewsSlider,
    HeroSection,
    NewsCta,
    HeroAdv,
    TopHeadline,
  },

  setup() {},
}
</script>
