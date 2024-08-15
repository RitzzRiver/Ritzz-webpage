import { createRouter, createWebHistory } from 'vue-router'

import artHomeView from '../views/art/arthomeView.vue'
import AboutView from '../views/art/aboutView.vue'
import ContactView from '../views/art/contactView.vue'
import PreferencesView from '../views/art/preferencesView.vue'
import ENTOSView from '../views/art/ENtermsofserviceView.vue'
import ESTOSView from '../views/art/EStermsofserviceView.vue'

import devHomeView from '../views/dev/devhomeView.vue'

import NotFoundView from '../views/notFoundView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/art'
        },
        {
            path: '/art',
            component: artHomeView,
            meta: { title: 'Home' }
        },
        {
            path: '/art/about',
            component: AboutView,
            meta: { title: 'About' }
        },
        {
            path: '/art/contact',
            component: () => ContactView,
            meta: { title: 'Contact' }
        },
        {
            path: '/art/preferences',
            component: PreferencesView,
            meta: { title: 'Likes and dislikes' }
        },
        {
            path: '/art/commisions/terms-of-service',
            component: ENTOSView,
            meta: { title: 'Terms of service' }
        },
        {
            path: '/art/commisions/terminos-de-servicio',
            component: ESTOSView,
            meta: { title: 'Terminos de servicio' }
        },
        {
            path: '/dev',
            component: devHomeView,
            meta: { title: 'Home' }
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundView,
            meta: { title: 'PAGE NOT FOUND' }
        },
    ]
})

export default router
