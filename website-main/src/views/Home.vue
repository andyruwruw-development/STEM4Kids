<template>
  <div class="home">
    <Header id="header" msg="Welcome to Your Vue.js App"/>
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>

<style scoped>
</style>