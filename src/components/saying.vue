
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


    <!-- <div class="demo">
      <css-doodle>
        :doodle {
        @grid: 10 / 100%;
        }

        background: hsl(120,100%,90%);

        transform: translate(
        @rand(-50vw, 50vw),
        @rand(-50vh, 50vh)
        );

        @size: 1vmin;
        @shape: circle;
        @place-cell: 50% 50%;

        animation-name: move;
        animation-iteration-count: infinite;
        animation-direction: reverse;
        animation-duration: calc(@rand(5s, 20s, .1));
        animation-delay: calc(@rand(-5s, -1s, .1));
        animation-timing-function:
        cubic-bezier(.84, .02, 1, 1);
        box-shadow: 0 0 1px #fff, 0 0 3px #fff, 0 0 10px #fff;
        zoom: @r(.1, 5, 3);
        @keyframes move {
        100% {
        transform: rotate(0) translate3d(0, 0, 0);
        }
        }

      </css-doodle>
    </div> -->

    <page-footer></page-footer>



  </div>
</template>

<script>
// import CSSDoodle from 'css-doodle'

import pageHeader from './pageHeader.vue'
import pageFooter from './pageFooter.vue'
import axios from "axios"
export default {
  data() {
    return {
      says: {},
      winHeight: '',
    }
  },
  components: {
    pageHeader,
    pageFooter
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
    top: 42%;
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
