import request from '@/utils/request'

declare enum Api {
  getBanner = '/banner'
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
