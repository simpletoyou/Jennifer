<!--
 * @Author: chenchuhua 3361694095@qq.com
 * @Date: 2022-08-08 09:45:26
 * @LastEditors: chenchuhua 3361694095@qq.com
 * @LastEditTime: 2022-08-08 13:59:01
 * @FilePath: \Jennifer\src\components\saying.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="saying-container">
    <!-- 背景图 -->
    <div class="banner" :style="'height:' + winHeight"></div>
    <!-- 导航栏 -->
    <page-header></page-header>

    <!-- 页面主体 -->
    <article>
      <div class="main">
        <div class="bracket-left">『</div>
        <div class="text">{{ says.hitokoto }}</div>
        <div class="bracket-right">』</div>
      </div>
      <div class="from">——&nbsp;{{ says.from }}</div>
    </article>
  </div>
</template>

<script>

import pageHeader from './pageHeader.vue'
import axios from "axios"
export default {
  data() {
    return {
      says: {},
      winHeight: '',
    }
  },
  components: {
    pageHeader
  },
  mounted() {
    // 请求一言接口
    let that = this
    that.fun()
    this.winHeight = window.innerHeight + 'px'
    window.setInterval(() => {
      setTimeout(that.fun(), 0)
    }, 5000)
  },
  methods: {
    fun() {
      let that = this
      axios.get('https://v1.hitokoto.cn')
        .then(({
          data
        }) => {
          that.says = data
        })
        .catch(console.error)
    }
  }
}
</script>

<style lang="less">
@line: .3rem;
@color: #FFF;
@bg: #d9d9d9;
@font: .16rem;

.saying-container {
  line-height: @line;
  position: relative;
  color: #FFF;



  article {
    position: absolute;
    top: 38%;
    width: 94%;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 0 3%;

    .main {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: .3rem;

      .text {
        padding: 0 2rem;
        line-height: .4rem;
      }
    }

    .from {
      font-size: .2rem;
      margin-top: .3rem;
    }
  }
}
</style>
