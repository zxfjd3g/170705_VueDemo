<template>
  <li @mouseenter="handleMouseEnter(true)" @mouseleave="handleMouseEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteTodo(index)">删除</button>
  </li>
</template>

<script>

  export default {
    props: {
      todo: Object,
      index: Number,
      deleteTodo: Function
    },
    data () {
      return {
        bgColor: 'white',
        isShow: false
      }
    },
    methods: {
      handleMouseEnter (isEnter) {
        if(isEnter) { // 进入
          this.bgColor = 'gray'
          this.isShow = true
        } else { // 离开
          this.bgColor = 'white'
          this.isShow = false
        }
      }
    }
  }
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>