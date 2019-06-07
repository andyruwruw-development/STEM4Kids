<template>
  <div class="lesson">
    <div id="lesson-div">
        <div class="item" v-for="item in lesson.lesson" v-bind:key="item.index">
            <sub-title v-if="item.type == 'subtitle'"  v-bind:data="item"/>
            <paragraph v-if="item.type == 'paragraph'" v-bind:data="item"/>
            <example   v-if="item.type == 'example'"   v-bind:data="item"/>
            <activity  v-if="item.type == 'activity'"  v-bind:data="item"/>
            <challenge v-if="item.type == 'challenge'" v-bind:data="item"/>
        </div>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/Lessons/SubTitle.vue'
import Paragraph from '@/components/Lessons/Paragraph.vue'
import Example from '@/components/Lessons/Example.vue'
import Activity from '@/components/Lessons/Activity.vue'
import Challenge from '@/components/Lessons/Challenge.vue'

export default {
  name: 'lesson',
  components: {
      SubTitle,
      Paragraph,
      Example,
      Activity,
      Challenge,
  },
  methods: {

  },
  computed: {
    lessonId() {
        return id = {
            subject: this.$route.params.subject,
            topicIndex: this.$route.params.topicIndex,
            index: this.$route.params.index,
        }
    },
    lesson() {
        return this.$store.state.lesson;
    }
  },
  async created() {
      //wait this.$store.dispatch("getLesson", {subject: lessonId.subject, topicIndex: lessonId.topicIndex, index: lessonId.index});
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#lesson-div {
    display: block;
    width: 100%;
    height: 100%;
}

</style>