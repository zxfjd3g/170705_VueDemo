<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users2</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['setSearchName'],
    data () {
      return {
        searchName: ''
      }
    },
    methods: {
      search () {
        const searchName = this.searchName.trim()
        if(searchName) {
          this.setSearchName(searchName)
        }
      }
    }
  }
</script>

<style>

</style>