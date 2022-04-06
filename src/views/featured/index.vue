<template>
  <div>
    <el-carousel
      v-if="banner.length"
      :interval="3000"
      type="card"
      :height="(bannerHeight as string)"
    >
      <el-carousel-item v-for="item in banner" :key="item.encodeId">
        <img
          ref="bannerImage"
          :src="item.imageUrl"
          class="w-full h-auto object-cover rounded-xl"
        />
      </el-carousel-item>
    </el-carousel>

    <div class="mt-6">
      <div class="flex items-end">
        <span class="text-xl font-semibold mr-4">{{
          $t('officialPlaylist')
        }}</span>
        <span class="text-sm text-gray-400">{{
          $t('officialSelectionAndSubscriptionPlaylist')
        }}</span>
      </div>

      <div>
        <el-carousel
          v-if="personalized.length"
          indicator-position="none"
          :height="(playCarouselHeight as string)"
          :autoplay="false"
        >
          <el-carousel-item
            v-for="(item, index) in personalized"
            :key="index"
            class="items-end"
            style="display: flex"
          >
            <el-row :gutter="20">
              <el-col
                v-for="actItem in item"
                :key="actItem.index"
                :span="4"
                class="transform hover:-translate-y-3 transition-all duration-300"
              >
                <div class="cursor-pointer">
                  <div class="relative music-image-wrapper">
                    <img
                      ref="playListImage"
                      :src="actItem.picUrl"
                      :alt="actItem.name"
                      class="w-full h-auto rounded-xl block object-cover"
                    />

                    <VideoPlay
                      class="w-8 h-8 hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white z-10"
                    />
                  </div>
                  <div
                    class="mt-2 text-sm text-gray-500 cursor-pointer hover:text-color1 transition-all line2-ellipsis"
                    >{{ actItem.name }}</div
                  >
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="mt-6">
      <div class="flex items-end">
        <span class="text-xl font-semibold">{{
          $t('recommendedAudioStations')
        }}</span>
      </div>

      <div>
        <el-carousel
          v-if="djprogram.length"
          indicator-position="none"
          :height="(djProgramHeight as string)"
          :autoplay="false"
          :arrow="djprogram.length > 1 ? 'hover' : 'never'"
        >
          <el-carousel-item
            v-for="(item, index) in djprogram"
            :key="index"
            class="items-end"
            style="display: flex"
          >
            <el-row :gutter="20">
              <el-col
                v-for="actItem in item"
                :key="actItem.index"
                :span="4"
                class="transform hover:-translate-y-3 transition-all duration-300"
              >
                <div class="cursor-pointer">
                  <div class="relative music-image-wrapper">
                    <img
                      ref="djprogramImage"
                      :src="actItem.picUrl"
                      :alt="actItem.name"
                      class="w-full h-auto rounded-xl block object-cover"
                    />

                    <VideoPlay
                      class="w-8 h-8 hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white z-10"
                    />
                  </div>
                  <div
                    class="mt-2 text-sm text-gray-500 cursor-pointer hover:text-color1 transition-all line2-ellipsis"
                    >{{ actItem.name }}</div
                  >
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="mt-6">
      <div class="flex items-end">
        <span class="text-xl font-semibold">{{ $t('recommendedMV') }}</span>
      </div>

      <div>
        <el-carousel
          v-if="mvList.length"
          indicator-position="none"
          height="250px"
          :autoplay="false"
          :arrow="mvList.length > 1 ? 'hover' : 'never'"
        >
          <el-carousel-item
            v-for="(item, index) in mvList"
            :key="index"
            class="items-end"
            style="display: flex"
          >
            <el-row :gutter="20" class="w-full">
              <el-col
                v-for="actItem in item"
                :key="actItem.index"
                :span="8"
                class="transform hover:-translate-y-3 transition-all duration-300"
              >
                <div class="cursor-pointer">
                  <div class="relative music-image-wrapper">
                    <img
                      :src="actItem.picUrl"
                      class="w-full h-auto rounded-xl overflow-hidden block object-cover"
                      style="height: 177px"
                    />

                    <VideoPlay
                      class="w-8 h-8 hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white z-10"
                    />
                  </div>
                  <div
                    class="mt-2 text-sm text-gray-500 cursor-pointer hover:text-color1 transition-all line2-ellipsis"
                    >{{ actItem.name }}</div
                  >
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="mt-6">
      <div class="flex items-end">
        <span class="text-xl font-semibold">{{ $t('latestRelease') }}</span>
      </div>

      <div>
        <el-carousel
          v-if="albumsList.length"
          indicator-position="none"
          :height="(albumsListHeight as string)"
          :autoplay="false"
          :arrow="albumsList.length > 1 ? 'hover' : 'never'"
        >
          <el-carousel-item
            v-for="(item, index) in albumsList"
            :key="index"
            class="items-end"
            style="display: flex"
          >
            <el-row :gutter="20">
              <el-col
                v-for="actItem in item"
                :key="actItem.index"
                :span="4"
                class="transform hover:-translate-y-3 transition-all duration-300"
              >
                <div class="cursor-pointer">
                  <div class="relative music-image-wrapper">
                    <img
                      ref="albumsListImage"
                      :src="actItem.picUrl"
                      :alt="actItem.name"
                      class="w-full h-auto rounded-xl block object-cover"
                    />

                    <VideoPlay
                      class="w-8 h-8 hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white z-10"
                    />
                  </div>
                  <div
                    class="mt-2 text-sm text-gray-500 cursor-pointer hover:text-color1 transition-all line2-ellipsis"
                    >{{ actItem.name }}</div
                  >
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'FeaturedPage'
  }
</script>

<script lang="ts" setup>
  import {
    getBanner,
    getPersonalized,
    getDjprogram,
    getMv,
    getNewsAlbum
  } from '@/api/index'
  import { getCurrentInstance, onMounted, ref } from 'vue'
  import { VideoPlay } from '@element-plus/icons-vue'

  const { proxy }: any = getCurrentInstance()

  // 获取banner
  const banner = ref<any[]>([])
  const bannerHeight = ref<string | number>('')
  const getBannerHandler = () => {
    return new Promise(async (resolve, reject) => {
      const { code, banners }: any = await getBanner()
      if (code == 200) {
        banner.value = banners
        setTimeout(() => {
          bannerHeight.value = proxy.$refs.bannerImage[0].height + 'px'
        }, 0)
        resolve('')
      } else {
        reject()
      }
    })
  }

  // 获取推荐歌单
  const personalized = ref<any[]>([])
  const playCarouselHeight = ref<number | string>('')
  const getPersonalizedHandler = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { code, result }: any = await getPersonalized()
        if (code == 200) {
          const saveArr: any[] = []
          let index = 0
          const pageSize = 6
          while (
            result.slice(index, index + pageSize).length <= pageSize &&
            result.slice(index, index + pageSize).length
          ) {
            const sliceArr = result.slice(index, index + pageSize)
            saveArr.push(sliceArr)
            index += pageSize
          }
          personalized.value = saveArr
          setTimeout(() => {
            playCarouselHeight.value =
              proxy.$refs.playListImage[0].height + 70 + 'px'
          }, 0)

          resolve('')
        } else {
          reject()
        }
      } catch (err) {
        reject(err)
      }
    })
  }

  // 获取推荐电台
  const djprogram = ref<any[]>([])
  const djProgramHeight = ref<number | string>('')
  const getDjprogramHandler = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { code, result }: any = await getDjprogram()
        if (code == 200) {
          const saveArr: any[] = []
          let index = 0
          const pageSize = 6
          while (
            result.slice(index, index + pageSize).length <= pageSize &&
            result.slice(index, index + pageSize).length
          ) {
            const sliceArr = result.slice(index, index + pageSize)
            saveArr.push(sliceArr)
            index += pageSize
          }
          djprogram.value = saveArr
          setTimeout(() => {
            djProgramHeight.value =
              proxy.$refs.djprogramImage[0].height + 70 + 'px'
          }, 0)
          resolve('')
        } else {
          reject()
        }
      } catch (err) {
        reject(err)
      }
    })
  }

  // 获取推荐视频
  const mvList = ref<any[]>([])
  const getMvHandler = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { code, result }: any = await getMv({ offset: 9 })
        if (code == 200) {
          const saveArr: any[] = []
          let index = 0
          const pageSize = 3
          while (
            result.slice(index, index + pageSize).length <= pageSize &&
            result.slice(index, index + pageSize).length
          ) {
            const sliceArr = result.slice(index, index + pageSize)
            saveArr.push(sliceArr)
            index += pageSize
          }
          mvList.value = saveArr
          resolve('')
        } else {
          reject()
        }
      } catch (err) {
        reject()
      }
    })
  }

  // 获取最新专辑
  const albumsList = ref<any[]>([])
  const albumsListHeight = ref<number | string>('')
  const getNewsAlbumHandler = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { code, albums }: any = await getNewsAlbum()
        if (code == 200) {
          const saveArr: any[] = []
          let index = 0
          const pageSize = 6
          while (
            albums.slice(index, index + pageSize).length <= pageSize &&
            albums.slice(index, index + pageSize).length
          ) {
            const sliceArr = albums.slice(index, index + pageSize)
            saveArr.push(sliceArr)
            index += pageSize
          }
          albumsList.value = saveArr
          setTimeout(() => {
            albumsListHeight.value =
              proxy.$refs.albumsListImage[0].height + 70 + 'px'
          }, 0)
          resolve('')
        } else {
          reject()
        }
      } catch (err) {
        reject(err)
      }
    })
  }

  // 调用全部数据接口
  const getAllData = () => {
    Promise.all([
      getBannerHandler(),
      getPersonalizedHandler(),
      getDjprogramHandler(),
      getMvHandler(),
      getNewsAlbumHandler()
    ])
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
