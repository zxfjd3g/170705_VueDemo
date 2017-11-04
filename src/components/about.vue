<template>
  <div>
    <h2>about route component</h2>
    <p>{{msg}}</p>
    <input type="text" />

    <button @click="$router.back()">返回</button>
  </div>
</template>

<script>
  export default {
    props: ['msg']
  }
</script>

<style>

</style>