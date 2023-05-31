import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'

import Home from '@/views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'home',
    children: [
      {
        name: 'Home',
        path: 'home',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router