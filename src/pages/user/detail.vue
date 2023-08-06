<template>
  <div class="user-detail-container">
    <div class="food-wrapper">
      <div
        v-for="(item, index) in foodList"
        :key="index"
        class="food-item"
      >
        <image :src="item.url"></image>
        <div class="food-info">
          <div class="name">
            {{item.name}}
          </div>
          <div class="count">
            × {{userStore[item.name] || 0}}
          </div>
        </div>
        <div class="action">
          <div
            class="reduce"
            @click="handleReduce(item)"
          >-</div>
          <div
            class="add"
            @click="handleAdd(item)"
          >+</div>
        </div>
      </div>
      <div
        class="btn"
        @click="hanldeConfirm"
      >
        确定
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { getFoodList, updateUserFood } from '@/api/food'
import { useUserStore } from '@/pinia/modules/user.js'

const { userInfo } = useUserStore()

const foodList = ref([])
const userStore = ref({})

const handleAdd = (item) => {
  if (!userStore.value[item.name]) {
    userStore.value[item.name] = 0
  }
  userStore.value[item.name]++
}

const handleReduce = (item) => {
  if (!userStore.value[item.name] || userStore.value[item.name] === 0) return
  userStore.value[item.name]--
}

const hanldeConfirm = async () => {
  const arr = Object.keys(userStore.value).map(key => ({
    key,
    count: userStore.value[key]
  }))
  await updateUserFood({
    id: userInfo.openId,
    foods: arr
  })
  uni.switchTab({
    url: '/pages/user/index'
  })
}

onMounted(async () => {
  console.log(userInfo.foodStore)
  const { data } = await getFoodList()
  foodList.value = data
  userInfo.foodStore.forEach(item => {
    userStore.value[item.key] = item.count
  })
})
</script>


<style lang="scss" scoped>
.user-detail-container {
  position: relative;
  height: 100%;
  padding: 24px;
  background-color: #f9fbfe;
  .title {
    padding-top: 30px;
    padding-bottom: 29px;
    text-align: center;
    font-size: 30px;
    color: #016b81;
  }
  .detail-wrapper {
    padding: 27px 16px;
    margin: 0 24px;
    background-color: #fff;
    border-radius: 15px;
  }
  .add-btn {
    position: absolute;
    top: -25px;
    width: 50px;
    height: 50px;
    left: 50%;
    margin-left: -25px;
    background-color: #fff;
    border-radius: 50%;
    image {
      width: 100%;
      height: 100%;
      transform: scale(0.4);
    }
  }
  .food-wrapper {
    width: 100%;
    padding: 24px;
    background-color: #fff;
    border-radius: 15px;
    box-sizing: border-box;
    .food-item {
      display: flex;
      margin-bottom: 24px;
      image {
        width: 60px;
        height: 60px;
        margin-right: 16px;
      }
    }
    .food-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      .name {
        flex: 1;
        font-size: 16px;
      }
      .count {
        flex: 1;
        font-size: 14px;
        color: #8b8b8b;
      }
    }
    .action {
      display: flex;
      align-items: center;
      width: 80px;
      text-align: center;
      color: white;
      .add {
        flex: 1;
        font-size: 30px;
        background-color: #08b0aa;
        border-radius: 0 15px 15px 0;
      }
      .reduce {
        flex: 1;
        font-size: 30px;
        background-color: greenyellow;
        border-radius: 15px 0 0 15px;
      }
    }
    .btn {
      width: 100%;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 20px;
      color: white;
      background-color: #08b0aa;
    }
  }
}
</style>
