<template>
  <div class="">
    <Header v-bind:path="path"/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'

export default {
  name: '',
  components: {
    Header
  },
  data() {
    return {
      path: [{ title: "My Dashboard", index: 0, back: 1},
             { title: "Curriculum", index: 0, back: 0},],
    }
  },
  methods: {
  },
  computed: {
    location() {
      this.$store.state.location;
    }
  }
}
</script>

<style scoped>

</style>