<template>
  <div>
    <div class="text-xl font-semibold mb-3"> 本周上新 </div>

    <div class="overflow-hidden relative top-new-wrapper">
      <el-row :gutter="20">
        <el-col
          v-for="item in notTopListArr"
          :key="item.id"
          :span="4"
          class="mb-3"
        >
          <div>
            <div class="relative music-image-wrapper cursor-pointer">
              <img
                :src="item.picUrl"
                alt=""
                class="w-full h-auto rounded-xl block object-cover"
                load="lazing"
              />

              <VideoPlay
                class="w-8 h-8 hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white z-10"
              />
            </div>

            <div
              class="mt-2 text-sm text-gray-500 cursor-pointer hover:text-color1 transition-all line2-ellipsis"
              >{{ item.name }}</div
            >
          </div>
        </el-col>
      </el-row>

      <div
        class="cursor-pointer top-arrow top-arrow-left w-9 h-9 rounded-full absolute top-1/2 transform -translate-x-full -translate-y-1/2 flex items-center justify-center transition-all"
        :class="{ 'cursor-not-allowed': topListPage.page <= 1 }"
        style="
          background-color: rgba(0, 0, 0, 0.2);
          color: rgba(255, 255, 255, 0.8);
        "
        @click="prevHandler"
      >
        <ArrowLeft class="w-7 h-7" />
      </div>

      <div
        class="cursor-pointer top-arrow top-arrow-right w-9 h-9 rounded-full absolute top-1/2 transform translate-x-full right-0 -translate-y-1/2 flex items-center justify-center transition-all"
        :class="{
          'cursor-not-allowed':
            topListPage.page >= Math.ceil(topList.length / topListPage.pageSize)
        }"
        style="
          background-color: rgba(0, 0, 0, 0.2);
          color: rgba(255, 255, 255, 0.8);
        "
        @click="nextHandler"
      >
        <ArrowRight class="w-7 h-7" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'SoundStation'
  }
</script>

<script lang="ts" setup>
  import { getDjTopList } from '@/api/index'
  import { onMounted, reactive, ref, computed } from 'vue'
  import { VideoPlay, ArrowLeft, ArrowRight } from '@element-plus/icons-vue'

  // 获取新晋电台榜
  interface TopListPage {
    limit: number
    page: number
    type?: 'new' | 'hot'
    pageSize: number
  }

  const topListPage = reactive<TopListPage>({
    limit: 100,
    page: 1,
    type: 'new',
    pageSize: 12
  })

  const topList = ref<any[]>([])
  const getDjTopListHandler = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { code, toplist: topListData }: any = await getDjTopList(
          topListPage
        )
        if (code == 200) {
          topList.value = topListData
          resolve('')
        } else {
          reject()
        }
      } catch (err) {
        reject(err)
      }
    })
  }
  const notTopListArr = computed(() => {
    return topList.value.slice(
      (topListPage.page - 1) * topListPage.pageSize,
      (topListPage.page - 1) * topListPage.pageSize + topListPage.pageSize
    )
  })

  // 获取全部数据
  const getAllData = () => {
    Promise.all([getDjTopListHandler()])
  }

  // 上一页
  const prevHandler = () => {
    if (topListPage.page <= 1) {
      return
    }
    topListPage.page--
  }

  // 下一页
  const nextHandler = () => {
    if (
      topListPage.page >= Math.ceil(topList.value.length / topListPage.pageSize)
    ) {
      return
    }
    topListPage.page++
  }

  onMounted(() => {
    getAllData()
  })
</script>

<style lang="scss" scoped>
  .music-image-wrapper {
    &:hover {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(black, 0.4);
        border-radius: 12px;
      }
      svg {
        display: block !important;
      }
    }
  }

  .top-new-wrapper {
    &:hover {
      .top-arrow-left {
        transform: translate(10px, -50%);
      }
      .top-arrow-right {
        transform: translate(-10px, -50%);
      }
    }

    .top-arrow {
      &:hover {
        background-color: rgba(0, 0, 0, 0.4) !important;
        color: rgba(255, 255, 255, 1) !important;
      }
    }
  }
</style>
