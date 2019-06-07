<template>
  <div class="login">
    <Header v-bind:path="path"/>
    <Login id="Login" v-if="loginreg == 0"/>
    <Register id="Register" v-if="loginreg == 1"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'
import Login from '@/components/General/Login.vue'
import Register from '@/components/General/Register.vue'

export default {
  name: 'login',
  components: {
    Header,
    Login,
    Register
  },
  data() {
    return {
      path: [],
      type: null,
      loginreg: 0,
    }
  },
  computed: {
      
  },
  created() {
    
  }
}
</script>

<style scoped>
#Login {
  margin-top: 5%;
}

#Register {
  margin-top: 5%;
}
</style>