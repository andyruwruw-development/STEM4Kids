<template>
  <div class="home">
    <Header v-bind:path="path"/>
    <h1>My Dashboard</h1>
    <div id="home-div">
      <button><div class="image" id="directory"></div><h2 class="inside-button">Directory</h2></button>
      <button><div class="image" id="check-in"></div><h2 class="inside-button">Check In / Out</h2></button>
      <button><div class="image" id="staff"></div><h2 class="inside-button">Staff List</h2></button>
      <button><div class="image" id="curriculum"></div><h2 class="inside-button">Curriculum</h2></button>
      <button><div class="image" id="reports"></div><h2 class="inside-button">Reports</h2></button>
      <button><div class="image" id="admin-tools"></div><h2 class="inside-button">Admin Tools</h2></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  },
  data() {
    return {
      path: [{ title: "My Dashboard", index: 0, path: "/", current: true}],
    }
  },
  methods: {
    directory() {
      this.$router.push();
    }
  }
}
</script>

<style scoped>
#home-div {
  width: 95%;
  display: flex;
  height: 400px;
  max-width: 600px;
  margin: 0 auto;
  
  justify-content: space-around;
  flex-wrap: wrap;
}

button {
  width: 150px;
  height: 150px;
  position: relative;
  padding: 0px;
  background-color: rgb(236, 236, 236);
  border: 0px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.322);
  border-radius: 30px;
  margin: 0 25px;
  margin-bottom: 30px;
}
button .image {
  opacity: .5;
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 35% 35%;
  background-position: center 40px;
  transition: all .3s ease;
  
}

button:hover .image {
  opacity: 1;
  background-position: center 30px;
}

button .inside-button {
  position: absolute;
  bottom: 0px;
  width: 100%;
  margin: 25px auto;
  font-size: 1.3em;
  text-align: center;
  color: rgb(134, 134, 134);
  font-weight: lighter;
  transition: all .3s ease;
}

button:hover .inside-button {
  color: rgb(34, 34, 34);
}

#staff {
  background-image: url("../assets/images/dashboard/staff.png");
}
#admin-tools {
  background-image: url("../assets/images/dashboard/admin-tools.png");
}
#check-in {
  background-image: url("../assets/images/dashboard/check-in.png");
}
#curriculum {
  background-image: url("../assets/images/dashboard/curriculum.png");
}
#directory {
  background-image: url("../assets/images/dashboard/directory.png");
}
#reports {
  background-image: url("../assets/images/dashboard/reports.png");
}

h1 {
  margin-top: 50px;
  margin-bottom: 30px;
  color: rgb(189, 189, 189);
}
</style>
