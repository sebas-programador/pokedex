import { createRouter, createWebHistory } from 'vue-router'
import PokemonView from '../views/PokemonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pokemon',
      component: PokemonView,
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/PokemonDetailView.vue'),
    },
  ],
})

export default router
