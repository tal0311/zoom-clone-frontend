<template>
  <div class="screens grid-container">
    <screen-preview v-for="screen in screens" :key="screen._id">
      ></screen-preview
    >

    <!--  -->
  </div>
</template>

<script>
import screenPreview from './screen-preview.vue'
export default {
  name: 'screens-list',
  data() {
    return {
      screens: [
        {
          _id: '101',
        },
        {
          _id: '102',
        },
        {
          _id: '103',
        },
        {
          _id: '104',
        },
        {
          _id: '105',
        },
      ],
    }
  },
  components: {
    screenPreview,
  },
}
</script>

<style></style>
