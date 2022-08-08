/*
 * @Description: 
 * @version: 
 * @Author: chenchuhua
 * @Date: 2021-04-22 14:26:50
 * @LastEditors: chenchuhua 3361694095@qq.com
 * @LastEditTime: 2022-08-05 16:49:11
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import saying from '@/components/saying'
import learning from '@/components/learning'
import life from '@/components/life'
// import about from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/saying',
      name: 'saying',
      component: saying
    },
    {
      path: '/learning',
      name: 'learning',
      component: learning
    },
    {
      path: '/life',
      name: 'life',
      component: life
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: about
    // }
  ]
})
