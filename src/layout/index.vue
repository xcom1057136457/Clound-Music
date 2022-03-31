<template>
  <div class="main-container h-full flex">
    <div class="sidebar w-64 h-full" style="background-color: #f0f0f0">
      <SideBar />
    </div>
    <div class="detail-container flex-1 h-full flex flex-col px-5">
      <Header />
      <div class="flex-1 overflow-auto">
        <router-view v-if="!$route.meta.keepAlive" />
        <router-view v-else v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
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
</script>

<style lang="scss" scoped></style>
