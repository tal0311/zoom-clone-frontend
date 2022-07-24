<template>
  <section class="upcoming-card flex d-column">
    <div class="card-header"></div>
    <div class="header-time"></div>
    <upcoming-list></upcoming-list>
  </section>
</template>

<script>
import upcomingList from './upcoming-list.vue'
export default {
  name: 'upcoming-events',
  components: {
    upcomingList,
  },
}
</script>

<style></style>
