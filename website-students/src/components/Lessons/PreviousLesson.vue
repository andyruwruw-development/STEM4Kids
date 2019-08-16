<template>
  <div class="previouslesson">
    <div @click="previousLesson" id="previouslesson-div">

    </div>
  </div>
</template>

<script>
export default {
  name: 'previouslesson',
  components: {

  },
  data() {
      return {
          
      }
  },
  methods: {
      previousLesson() {
          this.$router.push("/");
      }
  },
  computed: {
    
  },
  async created() {
    

  }
}
</script>

<style scoped>
/* Course Details */
#previouslesson-div {
    display: block;
    height: 60px;
    width: 100%;
    background-color: white;
    border-radius: 5px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    box-shadow: 3px 3px 3px rgba(190, 190, 190, .8);
    cursor: pointer;
}
</style>