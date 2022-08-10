import { createRouter, createWebHistory } from 'vue-router'
import zoomApp from './../views/zoom-app.vue'
import homeView from './../views/home-view.vue'
import zoomMeeting from './../views/zoom-meeting.vue'
import contactsView from './../views/contact-view.vue'
import meetingsView from './../views/meetings-view.vue'
import chatView from './../views/chat-view.vue'
import appsView from './../views/apps-view.vue'
import board from './../views/whiteBoard-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: zoomApp,
      children: [
        {
          path: '/',
          name: 'home',
          component: homeView,
        },
        {
          path: '/chat',
          name: 'chat',
          component: chatView,
        },
        {
          path: '/meetings',
          name: 'meetings',
          component: meetingsView,
        },
        {
          path: '/contact',
          name: 'contact',
          component: contactsView,
        },
        {
          path: '/apps',
          name: 'apps',
          component: appsView,
        },
        {
          path: '/board',
          name: 'board',
          component: board,
        },
      ],
    },
    {
      path: '/meeting/:id',
      name: 'meeting',
      component: zoomMeeting,
    },
  ],
})

export default router
