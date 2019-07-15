<template>
  <div class="courselistcomp">
    <div id="courselist-div">
      <div id="courses" class="flex flex-space-around">
        <div v-for="course in list" v-bind:key="course.name" class="course">
          <h1>{{course.name}}</h1>

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

  },
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  created() {

  }
}
</script>

<style scoped>
#courselist-div {
  display: block;
  width: 50%;
  min-height: calc(100vh - 65px - 60px);
}
</style>