<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllComplete"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="completeSize" @click="clearcompleteTodos">清除已完成任务</button>
  </div>
</template>

<script>

  export default {
    props: {
      todos: Array,
      selectAll: Function,
      clearcompleteTodos: Function
    },

    computed: {
      completeSize () {
        return this.todos.filter(todo=>todo.complete).length
      },
      isAllComplete: {
        get () {
          return this.todos.length>0 && this.todos.length===this.completeSize
        },
        set (value) {
          // 对所有todo进行全选或全不选
          this.selectAll(value)
        }
      }
    }
  }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>