<!--
 * @Description: 
 * @version: 
 * @Author: chenchuhua
 * @Date: 2021-04-22 14:26:50
 * @LastEditors: chenchuhua
 * @LastEditTime: 2021-05-14 16:13:46
-->
<template>
  <div class="learn-container">
    <!-- 背景图 -->
    <!-- <div class="banner" :style="'height:'+winHeight"></div> -->
    <!-- 导航栏 -->
    <page-header></page-header>

    <!-- 页面主体 -->
    <article>
      <div class="inner-box">
        <div class="card" v-for="(item, index) in list" :key="index">
          <span class="card-title">{{item.title}}</span>
          <div class="card-details" style="display: flex;">
              <img class="card-details__img" src="../assets/index/music.svg" alt="">
              <span class="card-details__author">{{item.author}}</span>
              <span class="card-details__time">{{item.time}}</span>
          </div>
          <span class="card-content">{{item.content}}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  import pageHeader from './pageHeader.vue'
  export default {
    data() {
      return {
        says: '',
        winHeight: '',
        list: '',//获取学习卡片数据
      }
    },
    components: {
      pageHeader
    },
    mounted() {
      this.winHeight = window.innerHeight + 'px'
    },
    created() {
      this.list = this.$datas.learnDatas
    }
  }
</script>

<style lang="less">
@import "../css/learning.less";
</style>
