<template>
  <div class="login">
    <div id="login-div">
        <h2>Welcome!</h2>
        <h1>Let's Login and Get Started.</h1>
        <input v-bind:class="{filled: username != ''}" v-model="username" type="text" placeholder="Username"/><p/>
        <input type="password" v-model="password" placeholder="Password"/><p/>
        <button @click="registerInstead">I'm New</button>
        <button @click="login">Let's Go!</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
      return {
          username: "",
          password: "",
      }
  },
  methods: {
      async login() {
        await this.$store.dispatch("loginChild", {username: this.username, password: this.password});
        console.log("Sending to New Location");
        this.$router.push("/");
      },
      registerInstead() {
        this.$store.dispatch("switchToggle", {value: false});
      }
  },
  computed: {

  },
}
</script>


<style scoped>
#login-div {
    min-width: 270px;
    margin: 0 auto;
    width: calc(50vw);
    max-width: 600px;
    padding: 10px;
    padding-bottom: 30px;
    border-radius: 5px;
    border: 1px solid rgba(204, 203, 203, 0.534);
    box-shadow: 10px 10px 10px rgba(128, 128, 128, 0.397);
    background-color: rgb(247, 247, 247);
}

h1 {
    color: rgb(255, 199, 96);
    margin-top: 0;
    margin-bottom: 30px;
}
h2 {
    color: rgba(128, 128, 128, 0.719);
    margin-bottom: 5px;
}

input {
    width: 50%;
    min-width: 150px;
    border: 1px solid rgba(204, 203, 203, 0.534);
    padding: 5px;
    background-color: rgba(211, 210, 210, 0.397);
    transition: all .2s ease;
    border-radius: 5px;
    font-size: 1.1em;
    margin-bottom: 10px;
}

input:focus {
    color: rgb(255, 255, 255) !important;
    background-color: rgb(58, 58, 58);
}

.filled {
    color: orange;
}

button {
    width: 25%;
    height: 50px;
    min-width: 140px;
    font-size: 1em;
    margin: 10px;
    color: rgb(83, 83, 83);
    background-color: rgba(211, 210, 210, 0.397);
    border-radius: 20px;
    transition: all .2s ease;
}

button:hover {
    background-color: rgba(243, 243, 243, 0.164);
    color: orange;
    animation: wiggle .3s ease;
}

@keyframes wiggle {
    0% {
        transform: rotate(0deg);
    }
    15% {
        transform: rotate(-2deg);
    }
    30% {
        transform: rotate(0deg);
    }
    45% {
        transform: rotate(2deg);
    }
    60% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(-2deg);
    }
    90% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

</style>
