/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件
import about from '../components/about.vue'
import home from '../components/home.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/about'   // 重定向
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/home',
      component: home
    }
  ]
})