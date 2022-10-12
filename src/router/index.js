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
          name: 'Home',
          component: homeView,
        },
        {
          path: '/chat',
          name: 'Chat',
          component: chatView,
        },
        {
          path: '/meetings',
          name: 'Meetings',
          component: meetingsView,
        },
        {
          path: '/contact',
          name: 'Contacts',
          component: contactsView,
        },
        {
          path: '/apps',
          name: 'Apps',
          component: appsView,
        },
        {
          path: '/board',
          name: 'WhiteBoard',
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
