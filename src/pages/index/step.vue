<template>
  <div class="setp-container">
    <ul>
      <li
        class="step-item"
        v-for="(step, index) in setpList"
        :key="index"
      >
        <div class="index">
          {{index + 1}}
        </div>
        <div class="content">
          {{step.content}}
        </div>
        <!-- <div class="img">
          <image :src='step.img'></image>
        </div> -->
      </li>
    </ul>
    <div
      class="next-btn"
      @click="handleToDone"
    >
      完成
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { onShow } from "@dcloudio/uni-app"
import { getStep } from '@/api/menu'
import { getCurrentRoute } from '@/utils/utils'

const setpList = ref([])

const handleToDone = () => {
  uni.navigateTo({
    url: '/pages/index/done'
  })
}

onShow(async () => {
  const { params } = getCurrentRoute()
  const { data } = await getStep(params.id)
  setpList.value = data
})
</script>


<style lang="scss" scoped>
.setp-container {
  padding: 24px;
  height: 100%;
  background-color: #f4f6f9;
  box-sizing: border-box;
  .step-item {
    display: flex;
    padding: 20px;
    min-height: 128px;
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 24px;
    box-sizing: border-box;
    .index {
      margin-right: 15px;
      font-size: 30px;
      color: #dba19a;
    }
    .content {
      font-size: 16px;
    }
    .img {
      width: 200px;
      height: 100%;
      image {
        width: 100%;
        height: 100%;
      }
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
