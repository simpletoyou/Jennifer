<template>
  <div class="index-container">
    <!-- 导航栏 -->
    <page-header></page-header>
    <article>
      <div class="intro">
        <div class="imgBox">
          <img src="../assets/index/intro1.jpg" alt="">
        </div>
        <div class="infoBox">
          <div class="name">Jennifer</div>
          <div class="desc">Keep running.</div>
          <div class="other">
            Chaos is not a pit, Chaos is a ladder. Many who try to climb it fail, and never get to try again, The fall
            breaks them. And some are given a chance to climb, but they refuse. They cling to the realm, or the gods, or
            love: illusions. Only the ladder is real; the climb is all there is.
          </div>
        </div>
      </div>
      <div class="currentDate">{{ currentDate }}</div>
      <div class="menuBox">
        <div class="card" v-for="(item, index) in cards" :key="index" :class="index == 1 ? 'reserveFlex' : ''">
          <img :src="item.img" alt="">
          <div class="cardInfo">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
            <div class="entryBtn">
              <img src="../assets/index/entry.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </article>
    <div class="goTop" :class="isTop ? 'goTopAfter' : ''" @click="goTop()">
      <div class="triangle"></div>
    </div>
    <!-- 公共尾部 -->
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from "./pageHeader.vue";
import pageFooter from "./pageFooter.vue";
export default {
  name: "index",
  data() {
    return {
      currentDate: '',
      scrollNum: 0, //滚动距离
      isTop: false, //是否显示回到顶部按钮
      myTimer: -1, //防止点击事件过度
      cards: [
        {
          img: require('../assets/index/rolls.jpg'),
          title: 'Keep learning',
          desc: 'I still keep thinking about how an entire life can seemingly amount to nothing. I guess the sad truth is, not everyone will accomplish something great.  Some of us may just have to find meaning in the little moments that make up life.'
        },
        {
          img: require('../assets/index/cups.jpg'),
          title: 'Meet by chance',
          desc: 'I still keep thinking about how an entire life can seemingly amount to nothing. I guess the sad truth is, not everyone will accomplish something great.  Some of us may just have to find meaning in the little moments that make up life.'
        },
        {
          img: require('../assets/index/plant.jpg'),
          title: 'Nice words',
          desc: 'I still keep thinking about how an entire life can seemingly amount to nothing. I guess the sad truth is, not everyone will accomplish something great.  Some of us may just have to find meaning in the little moments that make up life.'
        }
      ]
    };
  },
  components: {
    pageHeader,
    pageFooter,
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.scrollNum = top;
      if (top >= 300) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    });
  },
  async created() {
    this.getDate()
    // this.subPageData1 = this.$datas.subPageData1;
    // this.subPageData2 = this.$datas.subPageData2;
  },
  methods: {
    // 获取当前日期
    getDate() {
      //获取当前的年月日
      let date_ = new Date();
      let y = date_.getFullYear();
      let m = date_.getMonth() + 1;
      let d = date_.getDate();
      this.currentDate = `${y}-${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}`
    },
    goTop() {
      if (this.myTimer == -1) {
        this.myTimer = setInterval(() => {
          this.scrollNum -= 50;
          if (this.scrollNum <= 0) {
            this.scrollNum = 0;
            window.clearInterval(this.myTimer); //停止执行
            this.myTimer = -1;
          }
          window.scrollTo(0, this.scrollNum); //离开网页顶部的距离
        }, 10);
      }
    },
  },
};
</script>

<style lang="less">
@themeColor: #5c917b;
@lightTheme: #9ecfba;

.index-container {
  display: flex;
  flex-direction: column;

  article {
    width: 100%;
    padding: 2rem 0;

    .intro {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 12rem;
      margin: 0 auto;

      .imgBox {
        width: 4rem;
        height: 4rem;
        margin-right: .5rem;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .infoBox {
        position: relative;
        width: 7.5rem;
        font-family: 'ch';


        .name {
          margin-top: 1.5rem;
          font-size: .8rem;
          line-height: 1rem;

        }

        .desc {
          font-size: .2rem;
          line-height: 1rem;

        }

        .other {
          line-height: .32rem;
        }

        .line {
          background: #43447a;
          width: 10rem;
          height: .1rem;
          position: absolute;
          right: 0;
          bottom: 0;
          transform: rotate(-45deg);
        }
      }
    }

    .currentDate {
      width: 100%;
      padding: 1.5rem 0;
      margin: 2rem 0;
      background: #FFF;
      color: @themeColor;
      font-size: .8rem;
      text-align: center;
      font-family: 'ch';

    }

    .menuBox {
      display: flex;
      flex-direction: column;
      width: 12rem;
      margin: 0 auto;

      .card {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        margin-bottom: 1rem;

        img {
          width: 5rem;
          height: auto;
        }

        &.reserveFlex {
          flex-flow: row-reverse;
        }

        .cardInfo {
          width: 5.5rem;
          padding: 0 .5rem;
          color: #FFF;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;

          .title {
            font-size: .4rem;
            width: 100%;
            margin-bottom: .4rem;
          }

          .desc {
            line-height: .32rem;

          }

          // img {
          //   margin: .4rem 0;
          //   width: .4rem;
          //   height: .4rem;
          // }

          .entryBtn {
            color: #fff;
            border-radius: 4px;
            padding: .1rem .6rem;
            margin-top: .4rem;
            font-family: 'Lato', sans-serif;
            font-weight: 500;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
              7px 7px 20px 0px rgba(0, 0, 0, .1),
              4px 4px 5px 0px rgba(0, 0, 0, .1);
            outline: none;

            background-color: #89d8d3;
            background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
            border: none;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
              width: .2rem;
              height: .2rem;
            }

          }

          .entryBtn:after {
            position: absolute;
            content: "";
            width: 100%;
            height: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            border-radius: 4px;
            background-color: #4dccc6;
            background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
            box-shadow:
              -7px -7px 20px 0px #fff9,
              -4px -4px 5px 0px #fff9,
              7px 7px 20px 0px #0002,
              4px 4px 5px 0px #0001;
            transition: all 0.3s ease;
          }

          .entryBtn:hover {
            color: #fff;
          }

          .entryBtn:hover:after {
            top: 0;
            height: 100%;
          }

          .entryBtn:active {
            top: 2px;
          }

        }

      }
    }
  }

  // 返回顶部按钮
  .goTop {
    position: fixed;
    bottom: -1rem;
    right: 5%;
    width: .6rem;
    height: .6rem;
    border-radius: .3rem;
    z-index: 10;
    background-color: @lightTheme;
    transition: 0.3s ease-in-out;
    font-size: .3rem;
    text-align: center;
    line-height: .6rem;
    color: #ffffff;
    transition: .5s ease-in-out;
    cursor: pointer;


    .triangle {
      width: 0;
      height: 0;
      border-top: .14rem solid transparent;
      border-bottom: .14rem solid #FFF;
      border-left: .1rem solid transparent;
      border-right: .1rem solid transparent;
      border-radius: 4px;
      transform: translate(.2rem, .09rem);

    }
  }

  .goTop:hover {
    background-color: #8fd1b4;
    transition: .3s ease-in-out;
  }

  .goTopAfter {
    transition: .5s ease-in-out;
    bottom: 1rem;
  }
}
</style>
