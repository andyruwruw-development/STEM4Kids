<template>
  <div class="login">
      <Header/>
    <h1>Welcome to STEM-4-Kids.</h1>
    <div id="form">
        <h2>Let's Login and Get Started!</h2>
        <p>{{error}}</p>
        <input v-bind:class="{error : error != '' && username == ''}" type="text" v-model="username" placeholder="Username"/>
        <input v-bind:class="{error : error != '' && password == ''}" type="password" v-model="password" placeholder="Password"/>
        <div id="buttons" class="flex flex-horiz-cent">
            <button>Register Instead</button>
            <button @click="login">Login</button>
        </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'

export default {
  name: 'login',
  components: {
    Header,
  },
  data() {
      return {
          error: "",
          username: "",
          password: "",
      }
  },
  methods: {
      login() {
        if (this.username != "" && this.password != "")
        {

        }
        else {
            this.error = "Please fill in the following fields.";
        }
      },
      registerInstead() {
          this.$router.push("/register");
      }
  },
  async created() {
    await this.$store.dispatch("resetPath");
  }
}
</script>

<style scoped>
#form {
    display: block;
    width: 50vw;
    min-width: 300px;
    max-width: 600px;
    border-radius: 10px;
    padding: 20px;

    margin: 0 auto;
    background-color: white;
    box-shadow: 3px 3px 5px rgb(192, 192, 192);
}

input {
    display: block;
    width: 60%;
    min-width: 150px;
    margin: 10px auto;
    padding: 10px;
    
    background-color: rgb(240, 240, 240);
    font-size: .8em;
    text-align: center;
    border: 0px;
    border-radius: 5px;
}

.error {
    background-color: red;
    color: white;
}

#buttons {
    width: 100%;
}

button {
    display: block;
    background-color: rgb(240, 240, 240);
    border: 0px;
    width: 35%;
    min-width: 100px;
    margin: 10px;
    height: 35px;
    transition: all .2s ease;
    border-radius: 10px;
}

button:hover {
    background-color: rgb(73, 167, 255);
    color: white;
}
</style>