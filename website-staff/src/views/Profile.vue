<template>
  <div class="profile">
    <Header />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'

export default {
  name: 'profile',
  components: {
    Header
  },
  async created() {
    if (this.$store.state.user == null)
      this.$router.push("/login");
  }
}
</script>