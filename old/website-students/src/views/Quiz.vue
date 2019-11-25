<template>
  <div class="home">

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
    payload = {course: this.$route.params.course, chapter: this.$route.params.chapter, section: this.$route.params.section};
    await this.$store.dispatch("getQuiz", payload);
  }
}
</script>