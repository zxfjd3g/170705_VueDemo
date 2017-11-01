<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <add :addComment="addComment"/>
      <list :comments="comments"/>
    </div>
  </div>
</template>

<script>
  import add from './add.vue'
  import list from './list.vue'

  export default {
    data () {
      return {
        comments: [
          {username: 'Tom', content: 'just so so'},
          {username: 'Jack', content: 'so easy'},
          {username: 'Bob', content: '说啥啊....'}
        ]
      }
    },
    components: {
      add,
      list
    },
    methods: {
      addComment(comment) {
        this.comments.unshift(comment)
      },
      removeComment(index) {
        this.comments.splice(index, 1)
      }
    }
  }
</script>

<style>

</style>