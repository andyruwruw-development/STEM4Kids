<template>
  <div class="home">
    <Header/>
      
    <div id="home-body" class="flex">
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
    await this.$store.dispatch("bullshit");
    await this.$store.dispatch("pathReset");
    let payload = {path: {name: "Courses", path: "/"}}
    await this.$store.dispatch("pathPush", payload);
  }
}
</script>

<style scoped>
#home-body {
  display: flex;
  width: 100vw;
}

#menu-position {
  display: block;
}

#courselist {
  display: block;
  padding: 25px;
  width: calc(100% - 50px);
}
</style>
