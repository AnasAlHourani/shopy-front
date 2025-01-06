import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/log-in' , component: import('@/views/Auth/AuthLogin.vue')},
  {path: '/sign-up' , component: import('@/views/Auth/AuthSignup.vue')},
  {path: '/home', component: import('@/views/UserPages/Home.vue')},
  {path: '/profile', component: import('@/views/UserPages/Profile.vue')},
  {path: '/favorate', component: import('@/views/UserPages/Favorate.vue')},
  {path: '/cart', component: import('@/views/UserPages/Cart.vue')},
  {path: '/order', component: import('@/views/UserPages/Order.vue')},
  {path: '/err-not-found', component: import('@/views/System/Error404.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/err-not-found' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
