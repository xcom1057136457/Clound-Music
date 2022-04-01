import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('@/views/index.vue'),
        meta: {
          title: '音乐馆',
          keepAlive: true
        }
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
        component: () => import('@/views/video/index.vue'),
        meta: {
          title: '视频'
        }
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
        component: () => import('@/views/radio/index.vue'),
        meta: {
          title: '电台'
        }
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
        component: () => import('@/views/like/index.vue'),
        meta: {
          title: '我喜欢'
        }
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
        component: () => import('@/views/localMusic/index.vue'),
        meta: {
          title: '本地歌曲'
        }
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
        component: () => import('@/views/downloadMusic/index.vue'),
        meta: {
          title: '下载歌曲'
        }
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
        component: () => import('@/views/played/index.vue'),
        meta: {
          title: '最近播放'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
