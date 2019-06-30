<template>
  <div class="slider">
    <div id="slider-div">
      <div id="information">

      </div>

      <img v-bind:class="{visable : current == 1}" :src="image1"/>
      <img v-bind:class="{visable : current == 2}" :src="image2"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: {
    data: Object,
  },
  data() {
    return {
      current: 1,
      index: 0,
    }
  },
  methods: {
    changePhoto() {
      if (this.current == 1) this.current = 2;
      else this.current = 1;

      this.index = (this.index + 1) % this.data.length;
    },
  },
  computed: {
    image1() {
      return "../../assets/images/art_01.jpg";
    },

    image2() {
      return "../../assets/images/coding_01.jpg";
    },
  },
  created() {
    setInterval(this.changePhoto(), 3000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#slider-div {
  display: block;
  position: relative;
  width: 100vw;
  height: 500px;
}

img {
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0;
  transition: all .5s ease;
}

.visable {
  opacity: 1;
}
</style>




