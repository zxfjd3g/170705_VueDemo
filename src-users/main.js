import Vue from 'vue'
import VueResource from 'vue-resource'
import app from './components/app.vue'
// 声明使用插件
Vue.use(VueResource) // 内部会给所有组件对象添加一个属性: $http
new Vue({
  el: '#app',
  components: {app},
  template: '<app/>'
})