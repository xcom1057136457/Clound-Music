import request from '@/utils/request'

enum Api {
  getBanner = '/banner',
  getPersonalized = '/personalized',
  getDjprogram = '/personalized/djprogram',
  getMv = '/personalized/mv',
  getNewsAlbum = '/album/newest',
  getDjTopList = '/dj/toplist',
  getDjCatelist = '/dj/catelist'
}

// 获取banner
export function getBanner() {
  return request({
    url: Api.getBanner,
    method: 'get',
    params: {
      type: 0
    }
  })
}

// 推荐歌单
export function getPersonalized() {
  return request({
    url: Api.getPersonalized,
    method: 'get'
  })
}

// 推荐电台
export function getDjprogram() {
  return request({
    url: Api.getDjprogram,
    method: 'get'
  })
}

// 推荐视频
export function getMv(params: Record<string, number | string>) {
  return request({
    url: Api.getMv,
    method: 'get',
    params
  })
}

// 最新专辑
export function getNewsAlbum() {
  return request({
    url: Api.getNewsAlbum,
    method: 'get'
  })
}

// 获取新晋电台榜/热门电台榜
export function getDjTopList(params: Record<string, unknown>) {
  return request({
    url: Api.getDjTopList,
    method: 'get',
    params
  })
}

// 获取电台分类
export function getDjCatelist() {
  return request({
    url: Api.getDjCatelist,
    method: 'get'
  })
}
