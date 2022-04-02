<template>
  <div>
    <div class="text-2xl font-semibold text-slate-600">{{
      $t('musicPavilion')
    }}</div>

    <div class="menu-wrapper flex items-center mt-5">
      <div
        v-for="item in menuList"
        :key="item.componentName"
        class="mr-12 cursor-pointer"
        :class="{ current: componentName == item.componentName }"
        @click="changeComponent(item.componentName as string)"
        >{{ $t(item.label as string) }}</div
      >
    </div>

    <div class="mt-3 py-3">
      <keep-alive>
        <component :is="componentName" />
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
  import featured from './featured/index.vue'
  import soundStation from './soundStation/index.vue'
  export default {
    name: 'IndexPage',
    components: {
      featured,
      soundStation
    }
  }
</script>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()

  interface MunuList {
    label?: string
    componentName?: string
  }
  const menuList = reactive<MunuList[]>([
    {
      label: 'featured',
      componentName: 'featured'
    },
    {
      label: 'soundStation',
      componentName: 'soundStation'
    },
    {
      label: 'rank',
      componentName: 'rank'
    },
    {
      label: 'singer',
      componentName: 'singer'
    },
    {
      label: 'categoryPlaylist',
      componentName: 'categoryPlaylist'
    },
    {
      label: 'digitalAlbum',
      componentName: 'digitalAlbum'
    },
    {
      label: 'mobileExclusive',
      componentName: 'mobileExclusive'
    }
  ])

  const componentName = ref<string>(
    (route.query?.componentName as string) || 'featured'
  )

  const changeComponent = (val: string) => {
    componentName.value = val
    router.push({
      query: {
        componentName: val
      }
    })
  }
</script>

<style lang="scss" scoped>
  .current {
    position: relative;
    color: $color1;
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      right: 0;
      height: 3px;
      border-radius: 4px;
      background-color: $color1;
    }
  }

  .menu-wrapper {
    > div:last-child {
      margin-right: 0;
    }
  }
</style>
