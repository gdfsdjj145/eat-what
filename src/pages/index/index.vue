<template>
  <view class="eat-container">
    <view class="set-bg">
      <image src='../../static/bg.png'></image>
    </view>
    <view class="title">
      <p style="margin-bottom: 10px">
        吃点什么
      </p>
      <p style="font-size: 20px;">
        点一下，来一个菜
      </p>
    </view>
    <view class="cook-container">
      <image src='../../static/cook.png'></image>
    </view>
    <view class="eat-wrapper">
      <view class="type-container">
        <view class="type-wrapper">
          低脂
        </view>
        <view class="food-name">
          茄汁鸡扒
        </view>
        <view class="by">
          由官方提供
        </view>
      </view>
    </view>
    <view class="eat-wrapper-shadow"></view>
  </view>
</template>

<script setup>
import { useUserStore } from '@/pinia/modules/user.js'
const { userInfo, ageAdd } = useUserStore()
</script>

<style lang="scss" scoped>
.eat-container {
  position: relative;
  height: 100vh;
  .set-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    position: absolute;
    top: 300px;
    width: 100%;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
  }
  .cook-container {
    position: absolute;
    left: 50%;
    margin-left: -60px;
    top: 400px;
    width: 120px;
    height: 120px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 1);
    image {
      width: 100%;
      height: 100%;
      padding: 30px;
      box-sizing: border-box;
    }
  }
  // background-image: url("../static/bg.png");
  .eat-wrapper {
    position: absolute;
    bottom: 60px;
    left: 50%;
    margin-left: -165px;
    width: 327px;
    height: 152px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 1);
    z-index: 2;
    .type-container {
      padding: 15px;
      .type-wrapper {
        margin: 0 auto;
        width: 57px;
        height: 24px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        line-height: 24px;
        border-radius: 5px;
        background-color: #08b0aa;
      }
    }
    .food-name {
      text-align: center;
      font-size: 30px;
      font-weight: 500;
      padding: 15px;
    }
    .by {
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      color: rgba(139, 139, 139, 1);
    }
  }
  .eat-wrapper-shadow {
    position: absolute;
    margin: 0 auto;
    bottom: 52px;
    left: 50%;
    margin-left: -151px;
    width: 303px;
    height: 143px;
    opacity: 0.52;
    border-radius: 0px 0px 20px 20px;
    background: rgba(255, 255, 255, 1);
    z-index: 1;
  }
}
</style>
