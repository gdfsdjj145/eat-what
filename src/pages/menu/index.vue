<template>
  <div class="menu-container">
    <div class="header">
      <div class="searh-container"></div>
    </div>
    <div class="main">
      <ul>
        <li
          v-for="(item, index) in typeList"
          :key="index"
          class="type-container"
        >
          <div class="type-title">
            <div>
              {{item.title}}
            </div>
            <div>
              >
            </div>
          </div>
          <scroll-view
            scroll-x="true"
            class="type-list"
          >
            <div
              v-for="(type, i) in item.children"
              :key="i"
              class="type-item"
            >
              <image src="../../static//bg.png"></image>
            </div>
          </scroll-view>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const typeList = ref([
  {
    title: '土豆类',
    children: [
      {
        label: '做最好吃的土豆'
      },
      {
        label: '做最好吃的土豆'
      },
      {
        label: '做最好吃的土豆'
      },
      {
        label: '做最好吃的土豆'
      }
    ]
  },
  {
    title: '素食',
    children: [
      {
        label: '做最好吃的素食'
      }
    ]
  },
  {
    title: '顿顿肉',
    children: [
      {
        label: '做最好吃的素食'
      }
    ]
  },
  {
    title: '油条',
    children: [
      {
        label: '做最好吃的素食'
      }
    ]
  }
])
</script>


<style lang="scss" scoped>
.menu-container {
  padding-right: 24px;
  padding-top: 100px;
  .type-container {
    margin-bottom: 25px;
    .type-title {
      padding-left: 24px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 20px;
    }
    .type-list {
      height: 166px;
      padding: 10px 24px;
      white-space: nowrap;
      .type-item {
        display: inline-block;
        margin-right: 16px;
        width: 146px;
        height: 166px;
        border-radius: 20px;
        image {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }
      }
    }
  }
}
</style>
