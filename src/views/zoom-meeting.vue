<template>
  <div class="meeting-container flex d-column">
    <screen-list></screen-list>
    <meeting-actions></meeting-actions>
  </div>
  <!-- <MenuIcon /> -->
</template>

<script>
import meetingActions from './../components/meeting-actions.vue'
import screenList from '../components/screen-list.vue'
import MenuIcon from '../components/icons/menu-dots.vue'

export default {
  components: {
    MenuIcon,
    screenList,
    meetingActions,
  },
}
</script>

<style></style>
