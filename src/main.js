import Vue from 'vue'
import app from './components/app.vue'
import router from './router'

// 声明使用插件
new Vue({
  el: '#app',
  components: {app},
  template: '<app/>',
  router
})