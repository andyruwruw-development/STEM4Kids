<template>
  <div class="nextlesson">
    <div @click="nextLesson()" id="nextlesson-div">
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'nextlesson',
  components: {

  },
  data() {
      return {
          
      }
  },
  methods: {
      nextLesson() {
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
#nextlesson-div {
    display: block;
    height: 60px;
    width: 100%;
    background-color: white;
    border-radius: 5px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    box-shadow: 3px 3px 3px rgba(190, 190, 190, .8);
    cursor: pointer;
}
</style>