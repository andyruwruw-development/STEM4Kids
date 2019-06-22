<template>
  <div class="login">
    <Header v-bind:path="path"/>
    <transition name="slide">
      <Login id="Login" v-if="toggle == true"/>
      <Register id="Register" v-if="toggle == false"/>
    </transition>
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
    toggle() {
      return this.$store.state.switch;
    }
  },
  created() {
    this.$store.dispatch("switchToggle", {value: true});
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

.slide-enter-active {
  transition: all .5s ease .2s;
}

.slide-leave-active {
  transition: all .2s ease;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-50px);
}
</style>