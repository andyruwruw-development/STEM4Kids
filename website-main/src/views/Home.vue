<template>
  <div class="home">
    <Header id="header" data="data.header" />
    <span></span>
    <h1>{{data.header.title}}</h1>
    <Footer/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'
import Footer from '@/components/General/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
  },
  computed: {
    data() {
      return this.$store.state.data;
    }
  },
  async create() {
    await store.dispatch('getData');
  }
}
</script>

<style scoped>
span {
  display: block;
  height: 50vh;
}
</style>