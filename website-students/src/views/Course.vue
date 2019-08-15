<template>
  <div class="home">
    <Header />
    <CourseView />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'

import CourseView from '@/components/Courses/CourseView.vue'


export default {
  name: 'home',
  components: {
    Header,
    CourseView
  },
  async created() {
    await this.$store.dispatch("pathReset");
    let payload = {path: {name: "Courses", path: "/"}};
    await this.$store.dispatch("pathPush", payload);
    payload = {path: {name: this.$route.params.course, path: "/course/" + this.$route.params.course}};
    await this.$store.dispatch("pathPush", payload);
    payload = {course: this.$route.params.course};
    await this.$store.dispatch("getCourse", payload);
  },
}
</script>