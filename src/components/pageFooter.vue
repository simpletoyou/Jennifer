<!--
 * @Descripttion: 
 * @version: 
 * @Author: Jennifer
 * @Date: 2022-08-08 09:45:26
 * @LastEditors: Jennifer
 * @LastEditTime: 2022-11-24 09:41:45
-->

<template>
  <div class="footer">
    <div class="foot" style="z-index: 999">
      <div class="footBg">
        <div class="bottomText">
          <span>{{ info }}</span>
          <!-- <span>copyright@chugeer  2021-04-28</span> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: '有太多的东西擅长捉迷藏，去年买的旧围巾，刚到手的新橡皮，妈妈最称手的缝衣针，还有名为心动的喜欢一个人的感觉，它们让我们铆足了劲，却一无所获，然后在我们心灰意冷时，又轻描淡写地出现在任何地方，椅背上、书本中、棉线里，还有近在咫尺的我身后。人的心脏，平均每分钟会跳动六十至一百次，我数不清自己的心脏跳动频率的那天，连雨伞上坠落的水滴，都一起被打乱了节奏，悸动、雀跃、紧张，汇聚成了所有无处安放的心动，这个雨天，少女温热的心脏，跳动了一百零一下。'
    }
  },
}
</script>
<style lang="less">
.foot {
  width: 100%;

  .footBg {
    width: 100%;
    padding: .32rem calc(50% - 6rem);
    height: 300px;
    background: #437661;
    // position: fixed;
    // z-index: 999;
    bottom: 0;
    display: flex;
    justify-content: center;

    .bottomText {
      display: flex;
      align-items: center;
      span {
        color: #FFF;
        text-indent: 2em;
        line-height: .32rem;
      }
    }
  }
}
</style>
