<template>
  <section class="app-container">
    <app-nav></app-nav>
    <div class="settings">
      <i class="fa-solid fa-gear"></i>
    </div>
    <main class="main-container flex">
      <home-actions></home-actions>
      <upcoming-events></upcoming-events>
    </main>
    <app-footer></app-footer>
  </section>
</template>

<script>
import appFooter from './../components/app-footer.vue'
import appNav from '../components/app-nav.vue'
import upcomingEvents from './../components/upcoming-events.vue'
import homeActions from './../components/home-actions.vue'
export default {
  name: 'zoom-app',
  components: {
    homeActions,
    upcomingEvents,
    // appNav,
    appNav,
    appFooter,
  },
}
</script>
