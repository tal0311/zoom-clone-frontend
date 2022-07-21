import { createRouter, createWebHistory } from 'vue-router'
import zoomApp from './../views/zoom-app.vue'
import zoomMeeting from './../views/zoom-meeting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: zoomApp,
    },
    {
      path: '/meeting/:id',
      name: 'meeting',
      component: zoomMeeting,
    },
  ],
})

export default router
