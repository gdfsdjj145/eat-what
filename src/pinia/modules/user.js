/**
 * 用于用户信息数据持久化
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Login } from '@/api/common'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const foodList = ref([])

  const login = () => {
    return new Promise(resolve => {
      uni.login({
        provider: 'weixin', //使用微信登录
        success: async (loginRes) => {
          const { data } = await Login(loginRes.code)
          uni.getUserInfo({
            provider: 'weixin',
            success: async (infoRes) => {
              userInfo.value = {
                name: infoRes.userInfo.nickName,
                avatarUrl: infoRes.userInfo.avatarUrl,
                openId: data.openid,
                foodStore: data.foodStore
              }
              resolve()
            }
          });
        },
        fail: (error) => {
          console.log(error)
        }
      })
    })
  }
  const setUserFood = value => {
    const hash = getHashFoodList()
    userInfo.value.foodStore = value.map(item => ({
      ...item,
      url: hash[item.key]
    }))
  }
  const setFoodList = value => {
    foodList.value = value
  }

  const getHashFoodList = () => {
    const hash = {}
    foodList.value.forEach(item => {
      hash[item.name] = item.url
    })
    return hash
  }

  return {
    userInfo,
    foodList,
    setFoodList,
    setUserFood,
    getHashFoodList,
    login
  }
})
