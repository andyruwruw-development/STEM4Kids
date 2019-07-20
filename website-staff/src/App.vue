<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0px;
  background-color: rgb(224, 239, 255);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.flex {
  display: flex;
}

.flex-vert-cent {
  align-items: center;
}

.flex-horiz-cent {
  justify-content: center;
}

.flex-space-around {
  justify-content: space-around;
}

.flex-space-between {
  justify-content: space-between;
}

.block {
  display: block;
}

.visable {
  border: 1px solid black;
  background-color: rgb(0, 162, 255);
}
</style>
