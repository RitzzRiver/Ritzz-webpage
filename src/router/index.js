import { createRouter, createMemoryHistory, useLink} from 'vue-router'
import HomeView from '../views/home.vue'
import AboutView from '../views/about.vue'
import PreferencesView from '../views/preferences.vue';
import ContactView from '../views/contact.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView},
  { path: '/preferences', component: PreferencesView},
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;