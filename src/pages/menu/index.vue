<template>
  <div class="menu-container">
    <div class="header">
      <div class="searh-container">
        <input
          v-model="keyWord"
          class="uni-input"
          confirm-type="search"
          placeholder="请输入搜索关键词"
          @confirm="onSearch"
        />
      </div>
    </div>
    <div class="main">
      <div
        v-for="(item, index) in typeList"
        :key="index"
        class="item"
        @click="handleToDetail(item)"
      >
        <image
          mode="aspectFill"
          :src="item.img"
        ></image>
        <div class="text">
          {{item.title}}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
import { setStorage } from '@/utils/utils'
import { getMenu } from '@/api/menu'

const typeList = ref([])
const keyWord = ref('')

const onSearch = async () => {
  const { data } = await getMenu({
    page: 1,
    pageSize: 10,
    key: keyWord.value
  })
  typeList.value = data.list
}

const handleToDetail = (item) => {
  setStorage('menuData', JSON.stringify(item))
  uni.navigateTo({
    url: '/pages/menu/detail'
  })
}

watch(keyWord, nv => {
  if (!nv.length) {
    onSearch()
  }
})

onMounted(async () => {
  await onSearch()
})
</script>


<style lang="scss" scoped>
.menu-container {
  padding-top: 100px;
  .searh-container {
    margin: 0 24px;
    margin-bottom: 24px;
    padding: 14px;
    height: 48px;
    background-color: #f6f7f8;
    border-radius: 20px;
    box-sizing: border-box;
    input {
      height: 100%;
    }
  }
  .main {
    padding: 0 24px;
    column-count: 2; //想要排成的列数
    column-gap: 17px;
    border-radius: 20px;
    box-sizing: border-box;
    .item {
      position: relative;
      margin-bottom: 10px;
      .text {
        position: absolute;
        width: 80px;
        left: 17px;
        bottom: 24px;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
      }
      image {
        width: 100%;
        border-radius: 20px;
      }
    }
  }
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
