<template>
  <div class="lessonview">
    <Header id="header" v-bind:path="path"/>
    <Lesson />
    <transition name="slide">
      
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'
import Lesson from '@/components/Lessons/Lesson.vue'

export default {
  name: 'lessonview',
  components: {
    Header,
    Lesson,
  },
  data() {
    return {
      path: [],
    }
  },
  computed: {
  },
  created() {

  }
}
</script>

<style scoped>
#header {
    width: 100%;
}

.slide-enter-active {
  transition: all .5s ease .2s;
}

.slide-leave-active {
  transition: all .2s ease;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-50px);
}
</style>