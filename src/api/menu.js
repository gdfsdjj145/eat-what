import request from '@/utils/request'

export function getMenu (query) {
  return request({
    url: `/getMaterial?page=${query.page}&pageSize=${query.pageSize}&key=${query.key}`,
    method: 'get'
  })
}
export function getOne () {
  return request({
    url: '/getOne'
  })
}