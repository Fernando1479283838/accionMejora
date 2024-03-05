import { createRouter, createWebHistory } from 'vue-router'
import Principal from '../views/Principal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Principal
    }
  ]
})

export default router
