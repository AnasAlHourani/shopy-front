import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/auth/log-in' , component: import('@/views/Auth/AuthLogin.vue')},
  {path: '/auth/sign-up' , component: import('@/views/Auth/AuthSignup.vue')},
  {path: '/home', component: import('@/views/UserPages/Home.vue')},
  {path: '/favorate', component: import('@/views/UserPages/Favorate.vue')},
  {path: '/cart', component: import('@/views/UserPages/Cart.vue')},
  {path: '/order', component: import('@/views/UserPages/Order.vue')},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
