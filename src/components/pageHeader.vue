<!--
 * @Descripttion: 
 * @version: 
 * @Author: Jennifer
 * @Date: 2022-08-08 09:45:26
 * @LastEditors: Jennifer
 * @LastEditTime: 2022-11-04 11:45:44
-->


<template>
  <nav>
    <ul>
      <li v-for="(item, index) in menus" :key="index" @click="toPage(item.url)">{{ item.name }}</li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'pageHeader',
  data() {
    return {
      menus: [
        {
          name: '首页',
          url: '/'
        },
        {
          name: '学习',
          url: '/learning'
        },
        {
          name: '句子',
          url: '/saying'
        },
        {
          name: '生活',
          url: '/life'
        },
      ]
    }
  },
  methods: {
    toPage(url) {
      this.$router.push(`${url}`)
    }
  }
}
</script>
<style lang="less" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  font-size: .16rem;
  background: #437661;
  width: 100%;
  padding: .32rem calc(50% - 6rem);

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    li {
      margin-right: .4rem;
      cursor: pointer;
      list-style: none;
    }
  }

}
</style>
