<template>
  <nav class="app-nav flex space-between align-center">
    <div class="filter-container">filter</div>
    <nav-actions></nav-actions>
    <div class="user-preview flex">
      <p>user</p>
    </div>
  </nav>
</template>

<script>
import navActions from './nav-actions.vue'
export default {
  name: 'app-nav',
  components: {
    navActions,
  },
}
</script>

<style></style>
