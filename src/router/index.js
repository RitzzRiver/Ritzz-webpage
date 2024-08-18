import { createRouter, createWebHistory } from 'vue-router'

// main
import mainPageView from '../views/00_main/landingView.vue'

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
            component: () => import('../views/01_dev/devhomeView.vue'),
            meta: { title: 'Dev page' }
        },

        // info
        {
            path: '/info',
            component: () => import('../views/02_info/00_infoView.vue'),
            meta: { title: 'Main page' }
        },
        {
            path: '/info/about',
            component: () => import('../views/02_info/01_aboutView.vue'),
            meta: { title: 'About' }
        },
        {
            path: '/info/contact',
            component: () => import('../views/02_info/02_contactView.vue'),
            meta: { title: 'Contact' }
        },
        {
            path: '/info/preferences',
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
            path: '/art/commisions',
            component: () => import('../views/03_art/00_commisions/00_infoView.vue'),
            meta: { title: 'Commisions info' }
        },
        {
            path: '/art/commisions/status',
            component: () => import('../views/03_art/00_commisions/01_statusView.vue'),
            meta: { title: 'Commision status' }
        },
        {
            path: '/art/commisions/terms-of-service',
            component: () => import('../views/03_art/00_commisions/02_TOSView.vue'),
            meta: { title: 'Terms of service' }
        },
        {
            path: '/art/commisions/terminos-de-servicio',
            component: () => import('../views/03_art/00_commisions/03_TDSView.vue'),
            meta: { title: 'Terminos de servicio' }
        },
        {
            path: '/art/commisions/sketches',
            component: () => import('../views/03_art/00_commisions/04_sketchesView.vue'),
            meta: { title: 'Sketches commision info' }
        },
        {
            path: '/art/commisions/color',
            component: () => import('../views/03_art/00_commisions/05_colorView.vue'),
            meta: { title: 'Color commision info' }
        },
        {
            path: '/art/commisions/render',
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
