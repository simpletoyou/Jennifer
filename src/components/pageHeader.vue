<!--
 * @Author: chenchuhua 3361694095@qq.com
 * @Date: 2022-08-03 16:17:48
 * @LastEditors: chenchuhua 3361694095@qq.com
 * @LastEditTime: 2022-08-16 10:56:24
 * @FilePath: \my\shushu\src\components\pageHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
  width: 12rem;
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
