<template>
  <div class="menucomponent">
    <div id="menu-div">
        <button><div class="image" id="directory"></div><h2 class="inside-button">directory</h2></button>
        <button><div class="image" id="check-in"></div><h2 class="inside-button">check in</h2></button>
        <button><div class="image" id="staff"></div><h2 class="inside-button">staff</h2></button>
        <button><div class="image" id="curriculum"></div><h2 class="inside-button">material</h2></button>
        <button><div class="image" id="reports"></div><h2 class="inside-button">reports</h2></button>
        <button><div class="image" id="admin-tools"></div><h2 class="inside-button">admin</h2></button>
    </div>
  </div>
</template>

<script>
// { title: STRING, index: Number, path: String, current: Boolean}
export default {
  name: 'menucomponent',
  props: {

  },
  methods: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#menu-div {
    display: block;
    width: 10vw;
    min-width: 95px;
    max-width: 100px;
    height: 100vh;
    background-color: rgb(47, 49, 54);
    color: rgb(114, 118, 125);
    margin-top: 0;
    overflow:auto;
    
}

@media only screen and (max-width: 800px) {
  #menu-div {
    display: flex;
    width: 100%;
    min-width: 100vw;
    min-height: 95px;
    max-height: 120px;
    height: 10vh;
    overflow:hidden;
  }
  button {
    margin: auto auto !important;
  }
}
</style>

<style scoped>
button {
  display: block;
  width: 80px;
  height: 80px;
  position: relative;
  padding: 0px;
  border: 0px;
  margin: 20px auto;

  background-color: rgba(32, 34, 37, 0);
}
button .image {
  opacity: .5;
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center 15px;
  transition: all .3s ease;
  filter: invert(100%);
}

button:hover .image {
  opacity: 1;
  background-position: center 10px;
}

button .inside-button {
  position: absolute;
  bottom: 0px;
  width: 100%;
  margin: 5px auto;
  font-size: 1em;
  text-align: center;
  color: rgb(102, 106, 112);
  font-weight: lighter;
  transition: all .3s ease;
}

button:hover .inside-button {
  color: rgb(206, 206, 206);
}

#staff {
  background-image: url("../../assets/images/dashboard/staff.png");
}
#admin-tools {
  background-image: url("../../assets/images/dashboard/admin-tools.png");
}
#check-in {
  background-image: url("../../assets/images/dashboard/check-in.png");
}
#curriculum {
  background-image: url("../../assets/images/dashboard/curriculum.png");
}
#directory {
  background-image: url("../../assets/images/dashboard/directory.png");
}
#reports {
  background-image: url("../../assets/images/dashboard/reports.png");
}
</style>
