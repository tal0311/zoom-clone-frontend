<template>
  <section class="app-container">
    <app-nav></app-nav>
    <app-settings></app-settings>
    <main class="main-container flex">
      <home-actions></home-actions>
      <upcoming-events></upcoming-events>
    </main>
    <app-footer></app-footer>
  </section>
</template>

<script>
import appFooter from './../components/app-footer.vue'
import appSettings from '../components/app-settings.vue'
import appNav from '../components/app-nav.vue'
import upcomingEvents from './../components/upcoming-events.vue'
import homeActions from './../components/home-actions.vue'
export default {
  name: 'zoom-app',
  components: {
    homeActions,
    upcomingEvents,
    appSettings,
    appNav,
    appFooter,
  },
}
</script>
