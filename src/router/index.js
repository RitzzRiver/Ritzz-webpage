import { createRouter, createWebHistory } from 'vue-router'

import introView from '../views/introView.vue'
import error404View from '../views/error404View.vue'

import artHomeView from '../views/art/arthomeView.vue'
import AboutView from '../views/art/aboutView.vue'
import ContactView from '../views/art/contactView.vue'
import PreferencesView from '../views/art/preferencesView.vue'
import commisionsView from '../views/art/commisionsView.vue'
import ENTOSView from '../views/art/ENtermsofserviceView.vue'
import ESTOSView from '../views/art/EStermsofserviceView.vue'

import devHomeView from '../views/dev/devhomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: introView,
      meta: {title: 'Welcome to my page'}
    },
    {
      path: '/art',
      name: 'artHome',
      component: artHomeView,
      meta: {title: 'Home'}
    },
    {
      path: '/art/about',
      name: 'artAbout',
      component: AboutView,
      meta: {title: 'About'}
    },
    {
      path: '/art/contact',
      name: 'artContact',
      component: ContactView,
      meta: {title: 'Contact'}
    },
    {
      path: '/art/preferences',
      name: 'artPreferences',
      component: PreferencesView,
      meta: {title: 'Likes and dislikes'}
    },
    {
      path: '/art/commisions',
      name: 'artCommisions',
      component: commisionsView,
      meta: {title: 'commisions'}
    },
    {
      path: '/art/commisions/TermsOfService-EN',
      name: 'artCommisionsENTOS',
      component: ENTOSView,
      meta: {title: 'Terms of service'}
    },
    {
      path: '/art/commisions/TermsOfService-ES',
      name: 'artCommisionsESTOS',
      component: ESTOSView,
      meta: {title: 'Terminos de servicio'}
    },
    {
      path: '/dev',
      name: 'dev',
      component: devHomeView,
      meta: {title: 'Home'}
    },
    {
      path: '/404',
      name: '404',
      component: error404View,
      meta: {title: '404 PAGE NOT FOUND'}
    },
  ]
})

export default router
