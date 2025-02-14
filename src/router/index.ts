import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/comparar',
      name: 'comparar',
      component: () => import('../views/CompararView.vue'),
    },
    {
      path: '/caracteristicas',
      name: 'caracteristicas',
      component: () => import('../views/CaracteristicasView.vue'),
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductosView.vue'),
    },
    {
      path: '/comprar',
      name: 'comprar',
      component: () => import('../views/ComprarView.vue'),
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
