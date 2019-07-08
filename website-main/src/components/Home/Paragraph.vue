<template>
  <div class="paragraph">
    <h1>{{details.title}}</h1>
    <p>{{details.paragraph}}</p>    
  </div>
</template>

<script>
export default {
  name: 'paragraph',
  props: {
    details: Object
  },
  computed: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>