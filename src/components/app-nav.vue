<template>
  <nav class="app-nav flex space-between align-center">
    <app-search></app-search>
    <nav-actions></nav-actions>
    <user-preview></user-preview>
  </nav>
</template>

<script>
import appSearch from './app-search.vue'
import navActions from './nav-actions.vue'
import userPreview from './user-preview.vue'
export default {
  name: 'app-nav',
  components: {
    navActions,
    userPreview,
    appSearch,
  },
}
</script>

<style></style>
