import { createApp } from 'vue';

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: ToDo },
  { path: '/modals', component: Modals },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

import App from './app.vue';
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');