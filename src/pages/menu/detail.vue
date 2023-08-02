<template>
  <div class="detail-container">
    <div class="title">
      材料表
    </div>
    <div class="detail-wrapper">
      <div
        v-for="(item , index) in menuData.material"
        :key="index"
        class="detail-box"
      >
        <div class="detail-title">
          {{item.type}}
        </div>
        <ul>
          <li
            class="material-item"
            v-for="(item , i) in item.detail"
            :key="i"
          >
            <view class="name">
              {{item.title}}
            </view>
            <view class="count">
              {{item.count}}
            </view>
          </li>
        </ul>
      </div>
      <view
        class="next-btn"
        @click="handleToCook"
      >
        去烹饪
      </view>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import { getStorage } from '@/utils/utils'

const menuData = ref({})

const handleToCook = () => {
  uni.navigateTo({
    url: `/pages/index/step?id=${menuData.value.id}`
  })
}

onShow(() => {
  menuData.value = JSON.parse(getStorage('menuData'))
  console.log(menuData.value)
})
</script>


<style lang="scss" scoped>
.detail-container {
  position: relative;
  height: 100vh;
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
    .detail-box {
      margin-bottom: 15px;
    }
    .detail-title {
      font-size: 20px;
      margin-bottom: 9px;
      color: #03201f;
    }
    .material-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 7px;
      padding-left: 20px;
      .name {
        width: 220px;
        font-size: 16px;
        color: #031c1b;
      }
      .count {
        font-size: 14px;
        color: #8b8b8b;
      }
    }
  }
  .next-btn {
    margin: 0 auto;
    margin-top: 43px;
    width: 280px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    color: #fff;
    background-color: #08b0aa;
  }
}
</style>
