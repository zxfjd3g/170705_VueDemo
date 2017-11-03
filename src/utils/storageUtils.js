/*
读取/保存local中的数据的工具模块
向外暴露一个对象
向外暴露一个函数
 */

const TODOS_KEY = 'todos_key'
export default {

  getTodos () {
    return JSON.parse(localStorage.getItem(TODOS_KEY)||'[]')
  },

  saveTodos (todos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  }
}
