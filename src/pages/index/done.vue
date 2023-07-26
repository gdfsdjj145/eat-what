<template>
  <div class="done-container">
    <div class="done-wrapper">
      <image src="../../static/done.png"></image>
      <div class="text">
        恭喜你，完成这道菜
      </div>
    </div>
    <div
      class="next-btn"
      @click="handleGoBack"
    >
      返回首页
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const handleGoBack = () => {
  uni.switchTab({
    url: '/pages/index/index'
  })
}
</script>


<style lang="scss" scoped>
.done-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .done-wrapper {
    width: 328px;
    height: 328px;
    margin: 0 auto;
    text-align: center;
    image {
      width: 150px;
      height: 150px;
    }
    .text {
      padding: 10px 0;
    }
  }
  .next-btn {
    margin: 0 auto;
    margin-bottom: 43px;
    width: 327px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    color: #fff;
    background-color: #08b0aa;
  }
}
</style>
