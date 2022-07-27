<template>
  <div class="meeting-container flex d-column">
    <div class="grid-container">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
    </div>
    <div class="actions-bar flex align-center">
      <div class="mic-vid">
        <i class="fa-solid fa-microphone"></i>
        <i class="fa-solid fa-video"></i>
        <i class="fa-solid fa-microphone-slash d-none"></i>
        <i class="fa-solid fa-video-slash d-none"></i>
      </div>
      <div class="actions-container">
        <i class="fa-solid fa-shield-halved"></i>
        <i class="fa-solid fa-user-group"></i>
        <i class="fa-solid fa-desktop"></i>
        <i class="fa-solid fa-face-smile"></i>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
        <i class="fa-solid fa-vector-square"></i>
        <i class="fa-solid fa-chalkboard"></i>
        <i class="fa-solid fa-record-vinyl"></i>
      </div>
      <button>End</button>
    </div>
  </div>
  <!-- <MenuIcon /> -->
</template>

<script>
import MenuIcon from '../components/icons/menu-dots.vue'
export default {
  components: {
    MenuIcon,
  },
}
</script>

<style></style>
