<template>
  <div>
    消息ID为{{$route.params.id}}的详情为xxxxxxxxxxx
    <p>
      <button @click="$router.push('/about')">push去About</button>
      <button @click="$router.replace('/about')">replace去About</button>
      <button @click="$router.go(-1)">返回1</button>
      <button @click="$router.back()">返回2</button>
    </p>
  </div>
</template>

<script>
  export default {}
</script>

<style>

</style>