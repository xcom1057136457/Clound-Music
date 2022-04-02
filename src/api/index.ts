import request from '@/utils/request'

enum Api {
  getBanner = '/banner',
  getPersonalized = '/personalized',
  getDjprogram = '/personalized/djprogram',
  getMv = '/personalized/mv',
  getNewsAlbum = '/album/newest'
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
