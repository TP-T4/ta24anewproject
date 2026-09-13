import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './app.vue';
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import Messages from './pages/messages.vue';

const routes = [
  { path: '/', component: ToDo },
  { path: '/modals', component: Modals },
  { path: '/messages', component: Messages },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount('#app');