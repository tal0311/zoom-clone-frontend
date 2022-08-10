<template>
  <main class="main-container flex">
    <home-actions></home-actions>
    <upcoming-events></upcoming-events>
  </main>
</template>

<script>
import upcomingEvents from './../components/upcoming-events.vue'
import homeActions from './../components/home-actions.vue'
export default {
  components: {
    homeActions,
    upcomingEvents,
  },
}
</script>

<style></style>
