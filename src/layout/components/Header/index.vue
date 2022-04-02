<template>
  <div class="py-5 flex items-center justify-between">
    <div class="left-wrapper flex items-center">
      <div class="flex items-center text-gray-300 mr-5">
        <ArrowLeft
          class="w-6 h-6 mr-6 cursor-pointer hover:text-color1"
          @click="goPrevHandler"
        />
        <ArrowRight
          class="w-6 h-6 cursor-pointer hover:text-color1"
          @click="goNextHandler"
        />
      </div>

      <div class="relative">
        <input
          type="text"
          :placeholder="$t('searchMusic')"
          class="border-none px-8 py-3 rounded-3xl bg-gray-100 outline-none w-56 text-xs"
        />

        <Search
          class="w-3 h-3 absolute left-3 top-1/2 transform -translate-y-1/2"
        />
      </div>
    </div>

    <div class="right-wrapper flex items-center">
      <div class="cursor-pointer text-gray-500 flex items-center text-sm mr-5">
        <el-avatar class="mr-2" :size="30" :icon="UserFilled" />
        <span>{{ $t('clickToLogin') }}</span>
      </div>

      <Message
        class="w-5 h-5 text-gray-500 mr-3 cursor-pointer hover:text-color1"
      />

      <Sunny
        class="w-5 h-5 text-gray-500 mr-3 cursor-pointer hover:text-color1"
      />

      <Operation
        class="w-5 h-5 text-gray-500 mr-3 cursor-pointer hover:text-color1"
      />

      <el-select
        v-model="currentLang"
        class="w-36"
        placeholder="Select"
        @change="langChangeHandler"
      >
        <el-option
          v-for="item in languageList"
          :key="item.value"
          :label="item.label"
          :value="(item.value as string)"
        />
      </el-select>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'AppHeader'
  }
</script>

<script lang="ts" setup>
  import {
    ArrowLeft,
    ArrowRight,
    Search,
    UserFilled,
    Message,
    Sunny,
    Operation
  } from '@element-plus/icons-vue'
  import { getCurrentInstance, reactive, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRouter } from 'vue-router'

  const { locale } = useI18n()
  const router = useRouter()
  const { proxy }: any = getCurrentInstance()

  // 定义语言
  interface LanguageSelect {
    value?: string
    label?: string
  }
  const languageList = reactive<LanguageSelect[]>([
    {
      value: 'zhCn',
      label: '中文'
    },
    {
      value: 'en',
      label: 'English'
    }
  ])

  // 目前语言类型
  const currentLang = ref<string>(localStorage.getItem('lang') || 'zhCn')

  // 语言切换
  const langChangeHandler = (val: string) => {
    locale.value = val
    localStorage.setItem('lang', val)
  }

  const goPrevHandler = () => {
    router.go(-1)
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  const goNextHandler = () => {
    router.go(1)
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }
</script>

<style lang="scss" scoped></style>
