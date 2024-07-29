import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

router.beforeEach((to, from, next) => {
    const title = to.meta.title || 'Default Title'
    document.title = title
    next()
})

app.use(router)

app.mount('#app')
