<template>
  <div class="home">
    <Header v-bind:path="path"/>
    <Menu id="Menu" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'
import Menu from '@/components/Menu/Menu.vue'

export default {
  name: 'home',
  components: {
    Header,
    Menu
  },
  data() {
    return {
      path: [{title: "C++", index: 0, path: "", current: true}]
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    if (this.user == null)
    {
      console.log("hello");
      this.$router.push("login");
    }
  }
}
</script>

<style scoped>
#Menu {
  margin: 0 auto;
}
</style>
