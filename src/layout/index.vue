<template>
  <div
    class="container main-container h-full flex border-x border-y-0 border-solid border-gray-300"
  >
    <div class="sidebar w-64 h-full" style="background-color: #f0f0f0">
      <SideBar />
    </div>
    <div class="detail-container flex-1 h-full flex flex-col">
      <Header class="px-5" />
      <div
        v-loading="loading"
        class="flex-1 overflow-auto"
        element-loading-text="Loading..."
      >
        <el-scrollbar class="px-5">
          <router-view v-if="!$route.meta.keepAlive" />
          <router-view v-else v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'LayoutIndex'
  }
</script>

<script lang="ts" setup>
  import SideBar from './components/SideBar/index.vue'
  import Header from './components/Header/index.vue'
  import { useMainStore } from '@/store/main'
  import { computed } from '@vue/reactivity'

  const loading = computed(() => {
    return useMainStore().loading
  })
</script>

<style lang="scss" scoped></style>
