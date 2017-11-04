<template>
  <div>
    <h2 v-if="firstView">输入关键字进行搜索</h2>
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row" v-if="users">
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['searchName'],
    data () {
      return {
        firstView: true,
        loading: false,
        users: null,
        errorMsg: null
      }
    },
    watch: {
      searchName (value) {
        // 更新为状态(请求中)
        this.firstView = false
        this.loading = true
        this.users = null
        this.errorMsg = null
        // 发请求
        const url = `https://api.github.com/search/users?q=${value}`
        axios.get(url).then(response => {
          // 获取数据
          const result = response.data
          const users = result.items.map(item => {
            return {
              url: item.html_url,
              avatar: item.avatar_url,
              name: item.login
            }
          })
          // 更新状态(请求成功)
          this.users = users
          this.loading = false
        }).catch(error => {
          // 更新状态(请求失败)
          this.errorMsg = '请求失败'
          this.loading = false
        })
      }
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>