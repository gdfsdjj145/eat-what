import request from '@/utils/request'

export function Login (code) {
  return request({
    url: `/login?code=${code}`
  })
}