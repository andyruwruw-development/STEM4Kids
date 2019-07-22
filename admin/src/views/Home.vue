<template>
  <div class="home">
    <Header v-bind:path="path"/>
    <div id="main-flex">
      <Menu id="menu-comp"/>
      <div id="page">
        <Material v-if="page == 'material'" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'
import Menu from '@/components/General/Menu.vue'
import Material from '@/components/Material/Material.vue'

export default {
  name: 'home',
  components: {
    Header,
    Menu,
    Material,
  },
  data() {
    return {
      page: "material",
      path: [{ title: "My Dashboard", index: 0, back: 0}],
    }
  },
  methods: {
  },
  computed: {
    location() {
      this.$store.state.location;
    }
  },
}
</script>

<style scoped>
#menu-comp {
  z-index: 100;
}

#main-flex {
  display: flex;
  min-width: 100vh;
}

@media only screen and (max-width: 800px) {
  #main-flex {
    display: block;
  }
}

#home-div {
  width: 95%;
  display: flex;
  height: 400px;
  max-width: 600px;
  margin: 0 auto;
  
  justify-content: space-around;
  flex-wrap: wrap;
}

#page {
  display: block;
  flex-grow: 1;
  width: 100%;
  height: calc(100vh - 45px);
  background-color: rgba(253, 253, 255, 0);
  color: rgb(174, 176, 180);
}

</style>
