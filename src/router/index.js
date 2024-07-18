import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import AboutView from '../views/aboutView.vue'
import ContactView from '../views/contactView.vue'
import PreferencesView from '../views/preferencesView.vue'
import ENTOSView from '../views/ENtermsofserviceView.vue'
import ESTOSView from '../views/EStermsofserviceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {title: 'Home'}
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {title: 'About'}
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {title: 'Contact'}
    },
    {
      path: '/preferences',
      name: 'preferences',
      component: PreferencesView,
      meta: {title: 'Likes and dislikes'}
    },
    {
      path: '/TermsOfService-EN',
      name: 'ENTOS',
      component: ENTOSView,
      meta: {title: 'Terms of service'}
    },
    {
      path: '//TermsOfService-ES',
      name: 'ESTOS',
      component: ESTOSView,
      meta: {title: 'Terminos de servicio'}
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
