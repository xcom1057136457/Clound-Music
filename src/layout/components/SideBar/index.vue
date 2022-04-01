<template>
  <div class="dot-wrapper flex items-center py-2 px-2">
    <div class="dot w-3 h-3 rounded-full bg-color1 mr-2 cursor-pointer"></div>
    <div class="dot w-3 h-3 rounded-full bg-color2 mr-2 cursor-pointer"></div>
    <div class="dot w-3 h-3 rounded-full bg-color3 cursor-pointer"></div>
  </div>

  <a class="logo-wrapper px-5 pt-5 block" href="/">
    <img
      class="h-auto w-full cursor-pointer"
      src="@/assets/images/music-logo.png"
      alt=""
    />
  </a>

  <div class="menu-wrapper px-5 mt-8">
    <div class="top-text pl-3 text-sm mb-4" style="color: #a8a8a8">{{
      $t('onLineMusic')
    }}</div>

    <div>
      <div
        v-for="item in onLineMusic"
        :key="item.path"
        class="flex items-center pl-3 py-3 rounded-lg text-sm mb-2 cursor-pointer text-gray-500 hover:bg-slate-200 transition-all"
        :class="{ currentMenu: $route.path == item.path }"
        @click="goPageHandler(item.path as string)"
      >
        <component :is="item.icon" class="w-6 h-6 mr-3" />
        <span>{{ $t(item.label as string) }}</span>
      </div>
    </div>

    <div class="top-text pl-3 text-sm mb-4 mt-8" style="color: #a8a8a8">{{
      $t('myMusic')
    }}</div>

    <div>
      <div
        v-for="item in myMusic"
        :key="item.path"
        class="flex items-center pl-3 py-3 rounded-lg text-sm mb-2 cursor-pointer text-gray-500 hover:bg-slate-200 transition-all"
        :class="{ currentMenu: $route.path == item.path }"
        @click="goPageHandler(item.path as string)"
      >
        <component :is="item.icon" class="w-6 h-6 mr-3" />
        <span>{{ $t(item.label as string) }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    Box,
    VideoCamera,
    GobletSquareFull,
    Star,
    Monitor,
    Download,
    Headset
  } from '@element-plus/icons-vue'
  export default {
    name: 'SideBar',
    components: {
      Box,
      VideoCamera,
      GobletSquareFull,
      Star,
      Monitor,
      Download,
      Headset
    }
  }
</script>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  const router = useRouter()
  const route = useRoute()

  // 定义在线音乐导航栏
  interface OnLineMusic {
    path?: string
    label?: string
    icon?: string
  }
  const onLineMusic = reactive<OnLineMusic[]>([
    {
      path: '/',
      label: 'musicPavilion',
      icon: 'Box'
    },
    {
      path: '/video',
      label: 'video',
      icon: 'VideoCamera'
    },
    {
      path: '/radio',
      label: 'radio',
      icon: 'GobletSquareFull'
    }
  ])

  // 定义我的音乐
  interface MyMusic {
    path?: string
    label?: string
    icon?: string
  }
  const myMusic = reactive<MyMusic[]>([
    {
      path: '/like',
      label: 'iLike',
      icon: 'Star'
    },
    {
      path: '/localMusic',
      label: 'localMusic',
      icon: 'Monitor'
    },
    {
      path: '/downloadMusic',
      label: 'downloadMusic',
      icon: 'Download'
    },
    {
      path: '/played',
      label: 'played',
      icon: 'Headset'
    }
  ])

  // 跳转页面
  const goPageHandler = (path: string) => {
    if (route.path == path) {
      return
    }
    router.push({
      path
    })
  }
</script>

<style lang="scss" scoped>
  .currentMenu {
    color: #fff;
    background: linear-gradient(to right, rgba($color1, 0.7), $color1);
    box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, 0.04),
      0px 8px 20px rgba(0, 0, 0, 0.08);
  }
</style>
