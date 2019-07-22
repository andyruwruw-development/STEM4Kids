<template>
  <div class="paragraph">
    <div id="paragraph-div">
      {{data.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'paragraph',
  props: {
      data: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#paragraph-div {
  font-size: 1em;
  color: black;
  width: 100%;
  padding: 5px 0px;
}
</style>