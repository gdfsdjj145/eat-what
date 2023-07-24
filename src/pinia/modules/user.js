/**
 * 用于用户信息数据持久化
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({
    name: 'shuaige',
    age: 18,
    token: ''
  })
  const ageAdd = () => {
    userInfo.value.age++
  }
  return {
    userInfo,
    ageAdd
  }
})
