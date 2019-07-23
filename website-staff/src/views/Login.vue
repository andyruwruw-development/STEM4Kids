<template>
  <div class="loginview">
    <Header />
    <h1>Welcome to the STEM4Kids Staff Website</h1>
    <div v-if="toggle" id="login" class="form">
        <h2>Login to begin.</h2>
        <p v-if="error != ''">{{error}}</p>
        <input type="text" placeholder="Username" v-model="username" />
        <input type="password" placeholder="Password" v-model="password" />
        <button @click="toggleChange">Register Instead</button>
        <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'

export default {
  name: 'loginview',
  components: {
    Header
  },
  data() {
      return {
          toggle: true,

          error: "",

          username: "",
          name: "",
          password: "",
      }
  },
  methods: {
      login() {
          console.log(this.username);
      },
      register() {

      },
      toggleChange() {
          this.toggle = !this.toggle;
      }
  },
  async created() {
    if (this.$store.state.user == null)
      this.$router.push("/login");
  }
}
</script>

<style scoped>
.form {
    display: block;
    width: 90%;
    max-width: 400px;
    padding: 30px;
    border-radius: 20px;
    background-color: red;
}
</style>