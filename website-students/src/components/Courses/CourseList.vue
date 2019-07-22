<template>
  <div class="courselistcomp">
    <h1>Active Courses</h1>
    <div id="courselist-div">
      <div id="courses">
        <div v-bind:class="{enabled : course.enabled, salmon: course.color == 'salmon', indianred: course.color == 'indianred', crimson: course.color == 'crimson', salmon: course.color == 'salmon', salmon: course.color == 'salmon', salmon: course.color == 'salmon', salmon: course.color == 'salmon', salmon: course.color == 'salmon', salmon: course.color == 'salmon', salmon: course.color == 'salmon', salmon: course.color == 'salmon', salmon: course.color == 'salmon', salmon: course.color == 'salmon', salmon: course.color == 'salmon', }"
        @click="course(course.name)" v-for="course in list" v-bind:key="course.name" class="course">
          <p>{{course.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'courselistcomp',
  data() {
      return {

      }
  },
  methods: {
    async course(coursename) {
      let payload = {course: coursename};
      await this.$store.dispatch("getCourse", payload);
    },
  },
  computed: {
    list() {
      return this.$store.state.profile.courses;
    },
  },
  created() {

  }
}
</script>

<style scoped>
#courselist-div {
  display: block;
  min-height: calc(100vh - 65px - 60px);
}

#courses {
  display: flex;
  flex-wrap: wrap
}

.course {
  display: block;
  width: 250px;
  height: 300px;

  background-color: rgba(255, 71, 71, 0.982);
  margin: 20px;

  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(2, 2, 2, 0.425);

  color: white;
  font-weight: bolder;

  transition: all .2s ease;
}

.course:hover {
  transform: translateX(-2px) translateY(-2px);
  box-shadow: 8px 8px 8px rgba(2, 2, 2, 0.425);
}

p {
  font-size: 1.7em;
  word-wrap:normal;
  padding: 10px 15px;
  margin: 0;
}

h1 {
  font-size: 1.5em;
  margin: 0;
  margin-left: 20px;
  text-align: left;
}
</style>

<style scoped>
.red {
  
}

.indianred {}
</style>