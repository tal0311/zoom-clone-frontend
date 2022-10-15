<template>
  <section class="nav-actions-container flex space-between">
    <div
      v-for="({ iconClass, label }, idx) in navItems"
      :key="idx"
      class="icon-wrapper flex"
    >
      <router-link :to="{ name: label }">
        <i :class="iconClass"></i>
        <p>{{ label }}</p>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'nav-actions',
  data() {
    return {
      navItems: [
        {
          iconClass: 'fa-solid fa-house',
          label: 'Home',
        },
        {
          iconClass: 'fa-solid fa-message',
          label: 'Chat',
        },
        {
          iconClass: 'fa-solid fa-clock',
          label: 'Meetings',
        },
        {
          iconClass: 'fa-solid fa-id-badge',
          label: 'Contacts',
        },
        {
          iconClass: 'fa-solid fa-vector-square',
          label: 'Apps',
        },
        {
          iconClass: 'fa-solid fa-chalkboard',
          label: 'WhiteBoard',
        },
      ],
    }
  },
}
</script>

<style></style>
