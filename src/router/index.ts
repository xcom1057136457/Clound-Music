import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('@/views/index.vue')
      }
    ]
  },
  {
    path: '/video',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Video',
        component: () => import('@/views/video/index.vue')
      }
    ]
  },
  {
    path: '/radio',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Radio',
        component: () => import('@/views/radio/index.vue')
      }
    ]
  },
  {
    path: '/like',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Like',
        component: () => import('@/views/like/index.vue')
      }
    ]
  },
  {
    path: '/localMusic',
    component: Layout,
    children: [
      {
        path: '',
        name: 'LocalMusic',
        component: () => import('@/views/localMusic/index.vue')
      }
    ]
  },
  {
    path: '/downloadMusic',
    component: Layout,
    children: [
      {
        path: '',
        name: 'DownloadMusic',
        component: () => import('@/views/downloadMusic/index.vue')
      }
    ]
  },
  {
    path: '/played',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Played',
        component: () => import('@/views/played/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
