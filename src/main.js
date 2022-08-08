/*
 * @Description: 
 * @version: 
 * @Author: chenchuhua
 * @Date: 2021-04-22 14:26:50
 * @LastEditors: chenchuhua 3361694095@qq.com
 * @LastEditTime: 2022-08-08 10:01:54
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入全局样式文件
import './style.less'

Vue.config.productionTip = false

// 创建全局变量
import datas from '../src/common/datas'
Vue.prototype.$datas = datas
import lifes from '../src/common/life'
Vue.prototype.$lifes = lifes
// import api from '../src/common/api'
// Vue.prototype.$api = api

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
