<template>
  <view class="eat-container">
    <view
      @click="handleRestore"
      :class="['set-bg', activeFood ? 'bg-small' : '']"
    >
      <image
        mode="aspectFill"
        src='../../static/bg.png'
      ></image>
    </view>
    <view :class="['title',  activeFood ? 'fade-out' : '']">
      <p style="margin-bottom: 10px">
        吃点什么
      </p>
      <p style="font-size: 20px;">
        点一下，来一个菜
      </p>
    </view>
    <view :class="['cook-container', activeFood ? 'fade-out' : '']">
      <image src='../../static/cook.png'></image>
    </view>
    <view :class="[activeFood ? 'fade-out' : '', 'eat-wrapper']">
      <view
        :class="['type-container', activeFood ? 'fade-out' : '']"
        @click="handleShow"
      >
        <view class="type-wrapper">
          {{food.type}}
        </view>
        <view class="food-name">
          {{food.name}}
        </view>
        <view class="by">
          {{food.by}}
        </view>
      </view>
    </view>
    <view class="eat-wrapper-shadow"></view>
    <view :class="[!activeFood ? 'fade-out' : '','material-wrapper']">
      <view class="material-title">
        {{food.name}}
      </view>
      <view class="next-btn">
        去烹饪
      </view>
      <view class="material-main">
        <view
          class="material-detail"
          v-for="(material, index) in food.material"
          :key="index"
        >
          <view class="material-type">
            {{material.type}}
          </view>
          <ul>
            <li
              class="material-item"
              v-for="(item , i) in material.children"
              :key="i"
            >
              <view class="name">
                {{item.name}}
              </view>
              <view class="count">
                {{item.count}}
              </view>
            </li>
          </ul>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/pinia/modules/user.js'
const { userInfo, ageAdd } = useUserStore()
const activeFood = ref(false)

const food = ref({
  type: '低脂',
  name: '茄汁鸡扒',
  by: '由官方提供',
  material: [
    {
      type: '主料',
      children: [
        {
          name: '鸡腿扒',
          count: '1个'
        }
      ]
    },
    {
      type: '配料',
      children: [
        {
          name: '亨氏番茄酱',
          count: '2匙'
        },
        {
          name: '酱油',
          count: '1匙'
        },
        {
          name: '盐',
          count: '1匙'
        },
        {
          name: '牛油',
          count: '1块'
        },
      ]
    }
  ]
})

const handleShow = () => {
  activeFood.value = true
}

const handleRestore = () => {
  activeFood.value = false
}

</script>

<style lang="scss" scoped>
.eat-container {
  position: relative;
  height: 100vh;
  .set-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .bg-small {
    height: 30%;
  }
  .title {
    position: absolute;
    top: 300px;
    width: 100%;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
    transition: all 0.3s;
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
    transition: all 0.3s;
    image {
      width: 100%;
      height: 100%;
      padding: 30px;
      box-sizing: border-box;
    }
  }
  .material-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    top: 30%;
    left: 0;
    width: 100%;
    height: 70%;
    transition: all 0.5s;
    .material-title {
      text-align: center;
      font-size: 30px;
      font-weight: 500;
      padding: 15px;
    }
    .material-main {
      flex: 1;
      padding: 0 10px;
      overflow-y: auto;
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
    .material-detail {
      margin-bottom: 15px;
      .material-type {
        font-size: 20px;
        margin-bottom: 9px;
      }
      .material-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 7px;
        padding-left: 20px;
        .name {
          font-size: 16px;
          color: #031c1b;
        }
        .count {
          font-size: 14px;
          color: #8b8b8b;
        }
      }
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
      transition: all 0.3s;
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
.fade-out {
  top: -200px !important;
  opacity: 0;
}
.fade-bottom {
  bottom: -200px !important;
  opacity: 0;
}
</style>
