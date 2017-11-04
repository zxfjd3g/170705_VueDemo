<template>
  <div class="container">
    <search :setSearchName="setSearchName"/>
    <list :searchName="searchName"/>
  </div>
</template>

<script>
  import search from './search.vue'
  import list from './list.vue'

  export default {

    data () {
      return {
        searchName: ''
      }
    },

    methods: {
      setSearchName (searchName) {
        this.searchName = searchName
      }
    },

    components: {
      search,
      list
    }
  }
</script>

<style>

</style>