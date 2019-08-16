<template>
  <div class="lesson">
    <Header id="header-comp"/>
    <Lesson id="lesson-comp"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'
import Lesson from '@/components/Lessons/Lesson.vue'


export default {
  name: 'lesson',
  components: {
    Header,
    Lesson
  },
}
</script>

<style scoped>
#header-comp {
  z-index: 1;
}

#lesson-comp {
  z-index: -1;
}
</style>