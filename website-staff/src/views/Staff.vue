<template>
  <div class="staff">
    <Header />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'

export default {
  name: 'staff',
  components: {
    Header
  },
  async created() {
    if (this.$store.state.user == null)
      this.$router.push("/login");
  }
}
</script>