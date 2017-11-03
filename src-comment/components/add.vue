<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名2</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="username">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addItem">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: {
      addComment: {
        type: Function,
        isRequire: true
      }
    },
    data () {
      return {
        username: '',
        content: ''
      }
    },

    methods: {
      addItem () {
        // 检查用户输入
        const username = this.username.trim()
        const content = this.content.trim()
        if(!username || !content) {
          alert('请正常输入数据')
          return
        }
        // 根据输入生成一个comment对象
        const comment = {
          username,
          content
        }
        // 添加到comments中
        this.addComment(comment)
        // 清除用户输入
        this.username = ''
        this.content = ''
      }
    }
  }
</script>

<style>

</style>