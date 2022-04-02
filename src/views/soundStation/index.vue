<template>
  <div>
    <div class="text-xl font-semibold mb-3"> 本周上新 </div>

    <div class="overflow-hidden">
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
                class="w-full h-auto rounded-xl block"
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
  import { VideoPlay } from '@element-plus/icons-vue'

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
</style>
