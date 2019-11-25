<template>
  <div class="example">
    <div id="example-div">
      {{data.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'example',
  props: {
      data: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#example-div {
  width: 90%;
  margin: 0 auto;
  color: black;
  background-color: rgba(0, 0, 0, 0.021);
}
</style>