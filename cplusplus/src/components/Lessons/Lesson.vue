<template>
  <div class="lesson">
    <div id="lesson-div">
      <div id="back"></div>
      <div class="item" v-for="item in lesson.lesson" v-bind:key="item.index">
          <sub-title v-if="item.type == 'subtitle'"  v-bind:data="item"/>
          <paragraph v-if="item.type == 'paragraph'" v-bind:data="item"/>
          <example   v-if="item.type == 'example'"   v-bind:data="item"/>
          <activity  v-if="item.type == 'activity'"  v-bind:data="item"/>
          <challenge v-if="item.type == 'challenge'" v-bind:data="item"/>
      </div>
      <div id="forward"></div>
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
      return [];
      //return this.$store.state.lesson;
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
  position: relative;
  display: block;
  width: 90%;
  max-width: 1000px;
  padding: 20px;
  min-height: 200vh;
  margin: 50px auto;
  margin-top: 100px;
  background-color: white;
  border: 1px solid rgb(216, 216, 216);
  box-shadow: 3px 3px 4px rgba(196, 196, 196, 0.452);
  border-radius: 3px;
  margin-bottom: 100px;
}

#back {
  position: absolute;
  top: -250px;
  left: 0px;
  display: block;
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  min-height: 14vh;
  margin: 50px auto;
  background-color: white;
  border: 1px solid rgb(216, 216, 216);
  box-shadow: 3px 3px 4px rgba(196, 196, 196, 0.452);
  border-radius: 3px;
}

#forward {
  position: absolute;
  bottom: -100px;
  left: 0px;
  display: block;
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  min-height: 20px;
  background-color: white;
  border: 1px solid rgb(216, 216, 216);
  border-bottom: 0px;
  box-shadow: 3px 0px 4px rgba(196, 196, 196, 0.452);
  border-radius: 3px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

</style>