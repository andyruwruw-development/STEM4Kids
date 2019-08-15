<template>
  <div class="lesson">
    <Header/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'


export default {
  name: 'lesson',
  components: {
    Header
  },
  async created() {
    await this.$store.dispatch("pathReset");
    let payload = {path: {name: "Courses", path: "/"}}
    await this.$store.dispatch("pathPush", payload);
    payload = {path: {name: this.$route.params.course, path: "/course/" + this.$route.params.course}};
    await this.$store.dispatch("pathPush", payload);
    payload = {path: {name: this.$store.state.lesson.title, path: "/" + this.$route.params.course + "/lesson/" }};
    await this.$store.dispatch("pathPush", payload);

    payload = {course: this.$route.params.course, chapter: this.$route.params.chapter, section: this.$route.params.section};
    await this.$store.dispatch("getLesson", payload);
  }
}
</script>