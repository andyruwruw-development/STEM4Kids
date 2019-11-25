<template>
  <div class="view-item">
    <div id="view-item-div">
      <div class="piece" v-for="piece in item" v-bind:key="piece.index">
        <SubTitle v-bind:data="piece.data" v-if="piece.type == 'subtitle'"/>
        <Challenge v-bind:data="piece.data" v-if="piece.type == 'challenge'"/>
        <Example v-bind:data="piece.data" v-if="piece.type == 'example'"/>
        <Paragraph v-bind:data="piece.data" v-if="piece.type == 'paragraph'"/>
        <Activity v-bind:data="piece.data" v-if="piece.type == 'activity'"/>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/Material/ItemComponents/SubTitle.vue'
import Challenge from '@/components/Material/ItemComponents/Challenge.vue'
import Example from '@/components/Material/ItemComponents/Example.vue'
import Paragraph from '@/components/Material/ItemComponents/Paragraph.vue'
import Activity from '@/components/Material/ItemComponents/Activity.vue'

export default {
  name: 'view-item',
  components: {
    SubTitle,
    Challenge,
    Example,
    Paragraph,
    Activity,
  },
  methods: {

  },
  computed: {
    item() {
      return [
        {
          index: 1,
        }
      ]
      return this.$store.state.item;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>