<!--
 * @Description: 
 * @version: 
 * @Author: chenchuhua
 * @Date: 2021-04-22 14:26:50
 * @LastEditors: Jennifer
 * @LastEditTime: 2022-11-24 10:07:06
-->
<template>
  <!-- 设置粒子背景 -->
  <div id="app">
    <!-- <vue-particles color="#fff" :particleOpacity="0.6" :particlesNumber="20" shapeType="star" :particleSize="2"
      linesColor="#fff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="2"
      :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="lizi">
    </vue-particles> -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
.demo {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 380px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0a0c27;
}


.particles-js-canvas-el {
  /* height: calc(100% - 100px) !important; */
  position: absolute;
  z-index: 1;
  /* margin-top: 100px; */
}

html {
  font-size: 100px;

}

body {
  background: #5c917b;
  color: #FFF;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  display: none;
}

ul {
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 800px) {
  body {
    /* background: red; */
  }
}
</style>
