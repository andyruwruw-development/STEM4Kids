<template>
  <div class="slider">
    <div id="slider-div">
      <div id="information">

      </div>

      <div class="image" id="image1" v-bind:class="{visable : current == 1}" />
      <div class="image" id="image2" v-bind:class="{visable : current == 2}"/>
    </div>
  </div>
</template>


if () {

}

if ()
{

}



<script>
export default {
  name: 'slider',
  data() {
    return {
      current: 1,
      index: 0,
    }
  },
  methods: {
    changePhoto() {
      console.log("HIJISDF");
      if (this.current == 1) this.current = 2;
      else this.current = 1;

    },
  },
  computed: {

  },
  created() {
    setInterval(this.changePhoto, 8000);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes zoom {
  0% {
    background-size: 100% auto;
  }
  100% {
    background-size: 120% auto;
  }
}
#slider-div {
  display: block;
  position: relative;
  width: 100vw;
  height: 500px;
}

.image {
  position: absolute;
  z-index: -100;
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0;
  transition: all 1.5s ease;
  background-size: 100% auto;
  animation: 9s zoom linear 0s infinite;
}

.visable {
  opacity: 1;
  
}

#image1 {
  background-image: url("../../assets/images/coding_02.jpg");
}

#image2 {
  background-image: url("../../assets/images/robotics_02.jpg");
}
</style>




