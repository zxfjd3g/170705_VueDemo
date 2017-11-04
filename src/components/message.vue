<template>
  <div>
    <ul>
      <li v-for="(m, index) in messages" :key="index">
        <router-link :to="'/home/message/detail/'+m.id">{{m.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messages: []
      }
    },

    mounted () {
      //模拟ajax请求获取messages数据
      setTimeout(() => {
        const messages = [
          {id: 1, title: 'message001'},
          {id: 3, title: 'message003'},
          {id: 4, title: 'message004'}
        ]
        // 更新data
        this.messages = messages
      }, 1000)
    }
  }
</script>

<style>

</style>