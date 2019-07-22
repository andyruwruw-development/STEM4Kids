<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  overflow: auto;
  margin: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: block;
  text-align: center;
  position: absolute;
  left: 0px;
  right: 0px;
  color: #2c3e50;
  width: 100%;
  
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.flex {
  display: flex;
  align-items: center;
}
</style>
