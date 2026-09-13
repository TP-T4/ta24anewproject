import { createApp } from 'vue'

import App from './app.vue'
import ToDo from './pages/ToDo.vue'
import Modals from './pages/Modals.vue'
import Messages from './pages/messages.vue'
import Validation from './pages/Validation.vue'
import ChuckNorris from './pages/ChuckNorris.vue'
import RickandMorty from './pages/RickandMorty.vue'
import CanvasExample from './pages/CanvasExample.vue'
import WebApis from './pages/WebApis.vue'
import LeafletMap from './pages/LeafletMap.vue'

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: ToDo, name: 'ToDo' },
  { path: '/modals', component: Modals, name: 'Modals' },
  { path: '/messages', component: Messages, name: 'Messages' },
  { path: '/button', component: Validation, name: 'Button' },
  { path: '/chucknorris', component: ChuckNorris, name: 'Chuck' },
  { path: '/rickandmorty', component: RickandMorty, name: 'Rick and Morty' },
  { path: '/canvas', component: CanvasExample, name: 'Canvas Example' },
  { path: '/webapis', component: WebApis, name: 'Web APIs' },
  { path: '/map', component: LeafletMap, name: 'Leaflet Map' }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})



const app = createApp(App)
app.use(router)