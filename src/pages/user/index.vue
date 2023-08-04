<template>
  <div class="user-container">
    <div class="bg-container">
      <image src="../../static/bg2.png"></image>
    </div>
    <div class="user-wrapper">
      <div class="user-info">
        <div class="user-image">
          <image :src="userInfo.avatarUrl"></image>
        </div>
        <div class="info-wrapper">
          <div class="name">
            用户：{{userInfo.name}}
          </div>
        </div>
      </div>
    </div>
    <div class="refrigerator-contianer">
      <div class="refrigerator-wrapper">
        <div
          class="add-btn"
          @click="handleToAddFood"
        >
          <image src="../../static/add.png"></image>
        </div>
        <div class="refrigerator-padding">
          <div class="refrigerator-content">
            <ul>
              <li
                v-for="(item ,index) in userInfo.foodStore"
                :key="index"
                class="refrigerator-item"
              ></li>
            </ul>
          </div>
        </div>
        <div class="bottom-1"></div>
        <div class="botton-2"></div>
        <div class="bottom-box"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import { useUserStore } from '@/pinia/modules/user.js'

const { userInfo, login } = useUserStore()

const handleToAddFood = () => {
  uni.navigateTo({
    url: '/pages/user/detail'
  })
}

onShow(() => {
  login()
})
</script>


<style lang="scss" scoped>
.user-container {
  position: relative;
  height: 100vh;
  background-color: #f9f8fe;
  .bg-container {
    position: absolute;
    width: 100%;
    height: 282px;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .user-wrapper {
    position: absolute;
    top: 100px;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    .user-info {
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      width: 300px;
      height: 100%;
      border-radius: 20px;
      background-color: #fff;
    }
    .user-image {
      width: 60px;
      height: 60px;
      margin: 20px;
      border-radius: 50%;
      background-color: #f2f2f2;
      image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .info-wrapper {
      padding: 20px;
      .name {
        font-size: 16px;
      }
    }
  }
  .refrigerator-contianer {
    position: absolute;
    top: 230px;
    width: 100%;
    height: calc(100vh - 280px);
    padding: 0 10px;
    box-sizing: border-box;
    .refrigerator-wrapper {
      position: relative;
      height: 100%;
      border-radius: 3px;
      border: 10px solid #b0b4be;
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
      .refrigerator-padding {
        width: 100%;
        height: 100%;
        padding: 10px;
        background-color: #fff;
        border-radius: 3px;
        box-sizing: border-box;
      }
      .refrigerator-content {
        width: 100%;
        height: 100%;
        background-color: #8ebae6;
      }
      .refrigerator-item {
        width: 100%;
        height: 100px;
        border-bottom: 10px solid #fff;
      }
      .bottom-1 {
        position: absolute;
        bottom: -15px;
        left: 50%;
        margin-left: -45%;
        width: 90%;
        height: 5px;
        background-color: #41454b;
      }
      .botton-2 {
        position: absolute;
        bottom: -27px;
        width: 100%;
        height: 13px;
        border-radius: 5px;
        background-color: #797d86;
      }
      .bottom-box {
        position: absolute;
        bottom: -27px;
        left: 50%;
        margin-left: -40%;
        width: 80%;
        height: 6px;
        border-radius: 5px 5px 0 0;
        background-color: #f9f8fe;
      }
    }
  }
}
</style>
