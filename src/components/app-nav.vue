<template>
  <nav class="app-nav flex space-between align-center">
    <div class="filter-container">filter</div>
    <nav-actions></nav-actions>
    <user-preview></user-preview>
  </nav>
</template>

<script>
import navActions from './nav-actions.vue'
import userPreview from './user-preview.vue'
export default {
  name: 'app-nav',
  components: {
    navActions,
    userPreview,
  },
}
</script>

<style></style>
