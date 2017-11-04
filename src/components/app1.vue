<template>
  <div>
    <p v-if="!repoName">loading...</p>
    <p v-else>
      most star repo is
      <a :href="repoUrl">{{repoName}}</a>
    </p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        repoName: null,
        repoUrl: null
      }
    },

    mounted () {
      // 使用vue-resource发ajax请求
      const url = 'https://api.github.com/search/repositories?q=vu&sort=stars'
     /* this.$http.get(url)
        .then(
          response => {
            console.log(response)
            const result = response.data
            const {name, html_url} = result.items[0]
            this.repoName = name
            this.repoUrl = html_url
          },
          response => {
            console.log(response.statusText) //错误信息
          }
        )*/

      axios.get(url).then(response => {
        console.log(response)
        const result = response.data
        const {name, html_url} = result.items[0]
        this.repoName = name
        this.repoUrl = html_url
      }).catch(error => {
        console.log(error) //错误信息
      })
    }
  }
</script>

<style>

</style>