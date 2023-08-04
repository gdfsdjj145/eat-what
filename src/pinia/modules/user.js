/**
 * 用于用户信息数据持久化
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Login } from '@/api/common'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({
    name: 'shuaige',
    age: 18,
    token: ''
  })
  const ageAdd = () => {
    userInfo.value.age++
  }

  const login = () => {
    uni.login({
      provider: 'weixin', //使用微信登录
      success: async (loginRes) => {
        const { data } = await Login(loginRes.code)
        uni.getUserInfo({
          provider: 'weixin',
          success: async (infoRes) => {
            console.log(infoRes)
            userInfo.value = {
              name: infoRes.userInfo.nickName,
              avatarUrl: infoRes.userInfo.avatarUrl,
              openId: data.openid,
              foodStore: data.foodStore
            }
          }
        });
      },
      fail: (error) => {
        console.log(error)
      }
    })
  }
  return {
    userInfo,
    ageAdd,
    login
  }
})
