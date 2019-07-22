<template>
  <div class="menucomp">
    <div id="menu-div">
      <p>Welcome Back {{user.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menucomp',
  data() {
      return {

      }
  },
  methods: {

  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {

  }
}
</script>

<style scoped>
#menu-div {
  display: block;
  width: 20vw;
  padding: 20px;
  min-width: 200px;
  min-height: calc(100vh - 65px);
  background-color: rgb(66, 62, 79);
}

p {
  color: white;
  margin: 0px;
}
</style>