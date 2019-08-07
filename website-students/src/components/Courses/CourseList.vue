<template>
  <div class="courselistcomp">
    <h1>Active Courses</h1>
    <div id="courselist-div">
      <div v-if="list != null" id="courses">
        <div v-bind:class="{enabled : course.enabled}"
        @click="selectCourse(course.name)" v-for="course in list" v-bind:key="course.name" class="indianred course">
          <p>{{course.name}}</p>
        </div>
      </div>
      <div v-else id="courses">
        <div id="empty-1" class="empty course"></div>
        <div id="empty-2" class="empty course"></div>
        <div id="empty-3" class="empty course"></div>
        <div id="empty-4" class="empty course"></div>
      </div>
      <button @click="loadmaybe">simulate loading</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'courselistcomp',
  data() {
      return {
        loaded: false,
      }
  },
  methods: {
    async selectCourse(coursename) {
      let payload = {
        course: coursename,
      }
      await this.$store.dispatch("getCourse", payload);
      this.$router.push("/course/" + coursename);
    },
    loadmaybe() {
      this.loaded = !this.loaded;
    }
  },
  computed: {
    list() {
      if (!this.loaded) {
        return null;
      }
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
  min-height: calc(100vh - 65px - 60px - 15px);
}

#courses {
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
}

.course {
  display: block;
  width: 220px;
  height: 300px;
  padding: 10px;
  margin: 20px;

  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(2, 2, 2, 0.425);

  color: white;
  font-weight: bolder;

  transition: all .2s ease;
  animation: fade .5s ease;
}

.course:hover:not(.empty) {
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
  margin-top: 20px;
  margin-left: 35px;
  margin-bottom: 5px;
  color: rgba(63, 68, 83, 0.425);
  text-align: left;
}
</style>

<style scoped>

@keyframes fade {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes strobe {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

#empty-1
{
  animation-delay: 0s;
}
#empty-2
{
  animation-delay: .5s;
}
#empty-3
{
  animation-delay: 1s;
}
#empty-4
{
  animation-delay: 1.5s;
}

.empty {
  animation: strobe 2s ease 0s infinite;
  background-image: url("../../assets/Curriculum/empty.png");
  background-size: 250% auto;
  background-position: -220px -50px;
  filter: invert(80%);
  opacity: 0;
}

.indianred {
  background-color: rgba(255, 71, 71, 0.982);
}

.crimson {
  background-color: rgba(220,20,60, 0.982);
}

.mediumvioletred	 {
  background-color: rgba(199,21,133, 0.982);
}

.orangered {
  background-color: rgba(255,69,0, 0.982);
}

.darkorange {
  background-color: rgba(255,140,0, 0.982);
}

.gold {
  background-color: rgba(218,165,32, 0.982);
}

.deepmagenta {
  background-color: rgba(139,0,139, 0.982);
}

.indigo {
  background-color: rgba(75,0,130, 0.982);
}

.darkslateblue {
  background-color: rgba(72,61,139, 0.982);
}

.seagreen {
  background-color: rgba(46,139,87, 0.982);
}

.limegreen {
  background-color: rgba(50,205,50, 0.982);
}

.forestgreen {
  background-color: rgba(34,139,34, 0.982);
}

.teal {
  background-color: rgba(0,128,128, 0.982);
}

.steelblue {
  background-color: rgba(70,130,180, 0.982);
}

.royalblue {
  background-color: rgba(65,105,225, 0.982);
}

.mightyblue {
  background-color: rgba(25,25,112, 0.982);
}

.chocolate {
  background-color: rgba(210,105,30, 0.982);
}

.maroon {
  background-color: rgba(128,0,0, 0.982);
}
</style>