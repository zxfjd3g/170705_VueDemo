<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<todo-header v-on:addTodo="addTodo"/>-->
      <todo-header ref="header"/>
      <todo-main  :todos="todos"/>
      <todo-footer :clearcompleteTodos="clearcompleteTodos" :selectAll="selectAll" :todos="todos"/>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import header from './header.vue'
  import main from './main.vue'
  import footer from './footer.vue'
  import storageUtils from '../utils/storageUtils'

  export default {
    data () {
      return {
        todos: []
      }
    },

    mounted () {
      // 读取保存在local中的数据    json格式字符串
      this.todos = storageUtils.getTodos()
      // 绑定自定义的事件监听
      // this.$on('addTodo', this.addTodo)
      this.$refs.header.$on('addTodo', this.addTodo)
      // 订阅消息
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)
      })
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      clearcompleteTodos () {
        this.todos = this.todos.filter(todo => !todo.complete)  // 声明式
      },
      selectAll (check) {
        this.todos.forEach(todo => {
          todo.complete = check
        })
      }
    },

    watch: {
      todos: { // 尝试监视
        deep: true,
        /*handler: function (newVal, oldVal) {
          // 保存todos到local中
          storageUtils.saveTodos(newVal)
        }*/
        handler: storageUtils.saveTodos
      }
    },

    components: {
      'todo-header': header,
      'todo-main': main,
      'todo-footer': footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>