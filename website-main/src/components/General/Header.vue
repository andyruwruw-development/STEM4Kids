<template>
  <div class="header">
    <div class="flex" id="header-div">

      <div class="flex" id="logo-div">
        <img id="stem-logo" src="../../assets/stem-logo.png">
        <h1 id="website-title">STEM 4 Kids</h1>
      </div>

      <div class="flex" id="menu-div">

        <div class="flex menu-button" id="locations-div">
          <h1>Locations</h1>
          <div class="hover-indicator"></div>
        </div>

        <div class="flex menu-button" id="camps-div">
          <h1>Programs</h1>
          <div class="hover-indicator"></div>
        </div>

        <div class="flex menu-button" id="camps-div">
          <h1>Why STEM4Kids</h1>
          <div class="hover-indicator"></div>
        </div>

        <div class="flex menu-button" id="parent-login-div">
          <h1>Parent Login</h1>
        </div>

        <div class="flex menu-button" id="Register-div">
          <h1>Register</h1>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#header-div {
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100vw;
  justify-content: space-between;
  
  padding: 0px 10px;
}

#menu-div {
  width: 50vw;
  min-width: 605px;
  justify-content: space-around;
}

h1 {
  color: grey;
  font-size: 110%;

  cursor: pointer;
  font-weight: lighter;
}

#logo-div {
  margin-top: 10px;
}

#stem-logo {
  height: 50px;
}

#website-title {
  font-size: 150%;
  margin-left: 10px;
}


</style>
