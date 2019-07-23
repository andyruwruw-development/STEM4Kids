<template>
  <div class="home">
    <Header />
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
  async created() {
    if (this.$store.state.user == null)
      this.$router.push("/login");
  }
}
</script>
