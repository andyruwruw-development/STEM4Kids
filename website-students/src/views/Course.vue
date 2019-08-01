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
    payload = {path: {name: "Introduction to Python", path: "/course/Introduction%20to%20Python"}};
    await this.$store.dispatch("pathPush", payload);
  },
}
</script>