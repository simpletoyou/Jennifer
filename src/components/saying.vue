<!--
 * @Author: chenchuhua 3361694095@qq.com
 * @Date: 2022-08-08 09:45:26
 * @LastEditors: chenchuhua 3361694095@qq.com
 * @LastEditTime: 2022-08-08 09:58:55
 * @FilePath: \Jennifer\src\components\saying.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="saying-container">
    <!-- 背景图 -->
    <div class="banner" :style="'height:'+winHeight"></div>
    <!-- 导航栏 -->
    <page-header></page-header>

    <!-- 页面主体 -->
    <article>
      <div class="main">
        <div class="bracket-left">『</div>
        <div class="text">{{says.hitokoto}}</div>
        <div class="bracket-right">』</div>
      </div>
      <div class="from">——&nbsp;{{says.from}}</div>
    </article>
  </div>
</template>

<script>
  // import axios
  import pageHeader from './pageHeader.vue'
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
        
      }
    }
  }
</script>

<style lang="less">
@import "../css/saying.less";
  
</style>
