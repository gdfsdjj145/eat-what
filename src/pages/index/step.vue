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
      </li>
    </ul>
    <div class="next-btn">
      完成
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const setpList = ref([
  {
    content: '准备食材'
  },
  {
    content: '鸡腿纵向剪开'
  },
  {
    content: '倒入酱油腌制'
  },
  {
    content: '下牛油先煎带皮那面，逼出鸡油'
  },
  {
    content: '倒入料酒和一碗清水，大火烧开后转小火，盖上盖子慢焖'
  },
  {
    content: '两勺亨氏番茄酱'
  },
  {
    content: '收汁后关火，淋上鸡扒即可'
  }
])
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
    height: 128px;
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
