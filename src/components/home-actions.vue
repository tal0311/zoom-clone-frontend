<template>
  <section class="home-actions-container flex">
    <button
      v-for="(button, idx) in buttons"
      :key="idx"
      :title="button.title"
      :class="button.icon"
      @click="onAction(button.value)"
    ></button>
  </section>
</template>

<script>
export default {
  name: 'home-actions',
  data() {
    return {
      buttons: [
        {
          icon: 'action fa-solid fa-video',
          title: 'Start new meeting',
          value: 'new-meeting',
        },
        {
          icon: 'action fa-solid fa-plus',
          title: 'Join meeting',
          value: 'join',
        },
        {
          icon: 'action fa-solid fa-calendar-days',
          title: 'Schedule',
          value: 'schedule',
        },
        {
          icon: 'action fa-solid fa-share-nodes',
          title: 'Share meeting',
          value: 'share',
        },
      ],
    }
  },

  methods: {
    onAction(action) {
      switch (action) {
        case 'new-meeting':
          this.onNewMeeting()
          break
        case 'schedule':
          this.onSchedule()
          break
        case 'join':
          this.onJoin()
          break
        case 'share':
          this.onShare()
          break

        default:
          break
      }
    },

    onNewMeeting() {
      const path = 'meeting/123'
      const { width, height, left, top } = this.$store.getters.getUserSettings
      const windowFeatures = `height=${height}
      ,width=${width},left=${left},top=${top}`
      window.open(document.URL + path, '_blank', windowFeatures)
    },
    onSchedule() {
      console.log('Schedule meeting')
    },
    onJoin() {
      console.log('onJoin meeting')
    },
    onShare() {
      console.log(' onShare meeting')
    },
  },
}
</script>

<style></style>
