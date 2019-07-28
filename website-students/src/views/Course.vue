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
  }
}
</script>