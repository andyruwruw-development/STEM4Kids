<template>
  <div class="paragraph">
    <div id="paragraph-div">
        <p>{{data}}</p>
    </div>
  </div>
</template>

<script>
import Text from '@/components/Lessons/Text.vue'

export default {
  name: 'paragraph',
  props: {
      data: String,
  },
  
}
</script>

<style scoped>
/* Course Details */
#paragraph-div {
    display: block;
}

p {
    font-size: 16px;
    text-align: left;
    word-wrap: normal;
    line-height: 150%;
    margin-bottom: 10px;
}

</style>