<template>
  <div class="subtitle">
    <div id="subtitle-div">
        <p>{{data}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subtitle',
  props: {
      data: String,
  }
  
}
</script>

<style scoped>
/* Course Details */
#subtitle-div {
    display: block;
}

p {
    font-size: 20px;
    text-align: left;
    font-weight: bolder;
    margin-bottom: 20px;
}

</style>