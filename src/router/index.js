import { createRouter, createWebHistory } from 'vue-router'

// main
import mainPageView from '../views/landingPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // root
        {
            path: '/',
            component: mainPageView,
            meta: { title: 'Landing page' }
        },

        // dev
        {
            path: '/dev',
            component: () => import('../views/devPage.vue'),
            meta: { title: 'Dev page' }
        },

        // info
        {
            path: '/about',
            component: () => import('../views/02_info/00_infoView.vue'),
            meta: { title: 'Main page' }
        },
        {
            path: '/about-me',
            component: () => import('../views/02_info/01_aboutView.vue'),
            meta: { title: 'About' }
        },
        {
            path: '/contact',
            component: () => import('../views/02_info/02_contactView.vue'),
            meta: { title: 'Contact' }
        },
        {
            path: '/about/preferences',
            component: () => import('../views/02_info/03_preferencesView.vue'),
            meta: { title: 'Likes and dislikes' }
        },

        // art
        {
            path: '/art',
            component: () => import('../views/03_art/00_artView.vue'),
            meta: { title: 'Art page' }
        },
        {
            path: '/commisions',
            component: () => import('../views/03_art/00_commisions/00_infoView.vue'),
            meta: { title: 'Commisions info' }
        },
        {
            path: '/commisions/terms-of-service',
            component: () => import('../views/03_art/00_commisions/02_TOSView.vue'),
            meta: { title: 'Terms of service' }
        },
        {
            path: '/commisions/terminos-de-servicio',
            component: () => import('../views/03_art/00_commisions/03_TDSView.vue'),
            meta: { title: 'Terminos de servicio' }
        },
        {
            path: '/commisions/sketches',
            component: () => import('../views/03_art/00_commisions/04_sketchesView.vue'),
            meta: { title: 'Sketches commision info' }
        },
        {
            path: '/commisions/color',
            component: () => import('../views/03_art/00_commisions/05_colorView.vue'),
            meta: { title: 'Color commision info' }
        },
        {
            path: '/commisions/render',
            component: () => import('../views/03_art/00_commisions/06_renderView.vue'),
            meta: { title: 'Render commision info' }
        },
        {
            path: '/art/my-works',
            component: () => import('../views/03_art/01_works/00_myWorksView.vue'),
            meta: { title: 'My works' }
        },
        // 404
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../views/notFoundView.vue'),
            meta: { title: 'PAGE NOT FOUND' }
        }
    ]
})

export default router
