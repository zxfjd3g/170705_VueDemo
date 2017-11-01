<template>
  <div>
    <h2 class="title">{{title}}</h2>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Hello 组件标题'
      }
    }
  }
</script>

<style>
  .title {
    color: red;
  }
</style>