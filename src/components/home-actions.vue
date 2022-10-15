<template>
  <section class="home-actions-container flex">
    <button
      @click="onNewMeeting('meeting/123')"
      class="action fa-solid fa-video"
    ></button>
    <button class="action fa-solid fa-plus"></button>
    <button class="action fa-solid fa-calendar-days"></button>
    <button class="action fa-solid fa-share-nodes"></button>
  </section>
</template>

<script>
export default {
  name: 'home-actions',

  methods: {
    onNewMeeting(path) {
      const { width, height, left, top } = this.$store.getters.getUserSettings
      const windowFeatures = `location=no,toolbar=no,menubar=no,height=${height}
      ,width=${width},left=${left},top=${top}`
      window.open(document.URL + path, '_blank', windowFeatures)
    },
  },
}
</script>

<style></style>
