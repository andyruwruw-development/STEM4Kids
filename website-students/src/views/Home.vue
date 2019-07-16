<template>
  <div class="home">
    <Header/>
      
    <div id="home-body" class="flex">
      <Menu id="menu-position" />
      <CourseList id="courselist" />
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'
import Footer from '@/components/General/Footer.vue'
import Menu from '@/components/General/Menu.vue'

import CourseList from '@/components/Courses/CourseList.vue'


export default {
  name: 'home',
  components: {
    Header,
    Footer,
    Menu,
    CourseList
  },
  async created() {
    await this.$store.dispatch("pathReset");
    let payload = {path: {name: "Courses", path: "/"}}
    await this.$store.dispatch("pathPush", payload);
  }
}
</script>

<style scoped>
#home-body {
  position: relative;
  width: 100vw;
}

#menu-position {
  width: 20%;
}

#courselist {
  display: block;
  width: 75%;
}
</style>
