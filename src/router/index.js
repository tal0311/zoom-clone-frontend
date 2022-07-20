import { createRouter, createWebHistory } from 'vue-router'
import zoomApp from './../views/zoom-app.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: zoomApp,
    },
  ],
})

export default router
