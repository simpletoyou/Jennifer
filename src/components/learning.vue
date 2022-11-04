
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
              <span class="card-title">{{ item.title }}</span>
              <div class="card-details" style="display: flex;">
                <img class="card-details__img" src="../assets/index/music.svg" alt="">
                <span class="card-details__author">{{ item.author }}</span>
                <span class="card-details__time">{{ item.time }}</span>
              </div>
              <span class="card-content">{{ item.content }}</span>
            </div>
         
      </div>
    </article>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from './pageFooter.vue'
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
    pageHeader,
    PageFooter
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
@line: 30px;
@color: #FFF;
@bg: #d9d9d9;
@font: 16px;

.learn-container {
  line-height: @line;
  position: relative;

  li {
    color: @color;
    display: inline-block;
    color: #FFF;
    text-decoration: none;
    font-size: @font;
    margin-right: 30px;
    cursor: pointer;
  }

  .banner {
    filter: brightness(0.6);
    width: 100%;
    background: url(https://cn-south-227-storage-hitokoto-19627663.oss.dogecdn.com/pic/qf3cu.jpg) center no-repeat;
    background-size: cover;
  }

  article {
    color: #FFF;
    display: flex;
    justify-content: center;

    .inner-box {
      margin-top: 8%;
      width: 12rem;
      display: flex;
      flex-direction: column;

      .card {
        border: 1px solid #FFF;
        padding: 10px 20px;
        margin-bottom: 40px;
        border-radius: .1rem;

        .card-title {
          line-height: 40px;
          font-weight: 500;
          color: #ededed;
        }

        .card-details {
          display: flex;
          align-items: center;
          padding: 5px 0;

          .card-details__img {
            width: 20px;
            height: 20px;
          }

          .card-details__author {
            font-size: 14px;
            color: #ccc;

            margin: 0 10px 0 5px;
          }

          .card-details__time {
            color: #ccc;
            font-size: 14px;
          }
        }

        .card-content {
          font-size: 14px;
          color: #d6d6d6;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
