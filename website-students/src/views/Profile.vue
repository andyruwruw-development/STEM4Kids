<template>
  <div class="profile">
    <Header/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'


export default {
  name: 'profile',
  components: {
    Header,
  },
  async created() {
    await this.$store.dispatch("pathReset");
    let payload = {path: {name: "Courses", path: "/"}};
    await this.$store.dispatch("pathPush", payload);
    payload = {path: {name: "Profile", path: "/profile"}}
    await this.$store.dispatch("pathPush", payload);
  }
}
</script>