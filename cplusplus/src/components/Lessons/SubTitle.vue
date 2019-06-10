<template>
  <div class="subtitle">
    <div id="subtitle-div">
      {{data.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'subtitle',
  props: {
      data: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#subtitle-div {
  font-size: 2em;
  color: black;
  width: 100%;
  padding: 10px 0px;
}
</style>