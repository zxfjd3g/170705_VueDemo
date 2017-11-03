<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复3：</h3>
    <h2 v-if="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group" v-else>
      <item v-for="(comment, index) in comments" :key="index"
            :comment="comment" :removeComment="removeComment" :index="index"/>
    </ul>
  </div>
</template>

<script>
  import item from './item.vue'
  export default {
    // 声明接收标签属性
    props: ['comments', 'removeComment'], // comments会成为当前组件对象的属性
    components: {
      item
    }
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }
</style>