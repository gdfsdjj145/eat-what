import request from '@/utils/request'

export function getFoodList () {
  return request({
    url: '/getFood',
    method: 'get'
  })
}

export function getUserFood (id) {
  return request({
    url: `/getUserFood?id=${id}`,
    method: 'get'
  })
}

export function updateUserFood (data) {
  return request({
    url: '/setUserFood',
    method: 'post',
    data
  })
}