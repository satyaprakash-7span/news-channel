<template>
  <div id="nav">
    <TheSiteHeader />
  </div>
  <router-view />
</template>

<script>
import TheSiteHeader from './components/ThesiteHeader.vue'
export default {
  components: {
    TheSiteHeader,
  },
}
</script>
<style></style>
