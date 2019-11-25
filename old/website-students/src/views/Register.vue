<template>
  <div class="register">
      <Header/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'

export default {
  name: 'register',
  components: {
    Header,
  },
  async created() {
    await this.$store.dispatch("resetPath");
  }
}
</script>