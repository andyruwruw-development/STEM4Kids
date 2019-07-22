<template>
  <div class="profile">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'
import Footer from '@/components/General/Footer.vue'
import Menu from '@/components/General/Menu.vue'


export default {
  name: 'profile',
  components: {
    Header,
    Footer,
    Menu
  },
  async created() {
    let payload = {path: {name: "Profile", path: "/profile"}}
    await this.$store.dispatch("pathPush", payload);
  }
}
</script>