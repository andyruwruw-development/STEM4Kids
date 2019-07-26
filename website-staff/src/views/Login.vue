<template>
  <div class="loginview">
    <Header />

    <div v-if="login" class="form">
        <h2>Sign In</h2>
        <p v-if="error != ''">{{error}}</p>
        <input type="text" placeholder="Username" v-model="username" />
        <input type="password" placeholder="Password" v-model="password" />
        
        <button class="submit" @click="login">Login</button>

        <div class="bottom">
          <p>New to STEM4Kids?</p><p class="change" @click="toggleChange">Register Instead</p>
        </div>
    </div>

    <div v-if="register" class="form">
        <h2>Register</h2>
        <p v-if="error != ''">{{error}}</p>
        <input type="text" placeholder="Username" v-model="username" />
        <input type="password" placeholder="Password" v-model="password" />
        
        <button class="submit" @click="login">Login</button>

        <div class="bottom">
          <p>Have an Account?</p><p class="change" @click="toggleChange">Login Instead</p>
        </div>
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
          login: true,
          register: false,

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
        this.login = !this.login;
        this.register = !this.register;
      }
  },
  async created() {
    if (this.$store.state.user == null)
      this.$router.push("/login");
  }
}
</script>

<style scoped>
@keyframes come-in {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
  
}

.form {
  position: relative;
  margin: 0 auto;
  display: block;
  width: 90%;
  animation: come-in 1s ease;
  max-width: 400px;
  min-height: 350px;
  padding: 40px 30px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.659);
  border: 3px solid rgba(255, 255, 255, 0.349);
  margin-top: 10vh;
  box-shadow: 5px 5px 5px rgba(11, 11, 11, 0.13);
  
}

h2 {
  margin: 0 auto;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-align: left;
  width: calc(85% + 15px);
}

input {
  display: block;
  width: 85%;
  margin: 0 auto;
  font-size: 1em;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(19, 19, 19, 0.31);
  border: 1px solid rgb(230, 229, 229);
  margin-bottom: 25px;
}

#buttons {
  justify-content: space-around;
  flex-wrap: wrap;
}

.submit {
  display: block;
  width: 90%;
  padding: 10px; 
  background-color: rgb(41, 158, 237);
  box-shadow: 3px 3px 3px rgba(19, 19, 19, 0.31);
  border-radius: 15px;
  color: white;
  font-size: 1.3em;
  font-weight: bolder;
  margin: 0 auto;
  margin-bottom: 10px;
}

.bottom {
  position: absolute;
  display: flex;
  bottom: 10px;
  justify-content: center;
  width: 100%;
  left: 0px;
}

.change {
  margin-left: 5px;
  transition: all .2s ease;
}

.change:hover {
  color: rgb(26, 133, 226);
}

p {
  font-size: 1em; 
}




</style>