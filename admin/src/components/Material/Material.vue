<template>
  <div class="material">
    <div id="material-div">
        <List id="list"/>
        <div id="main">
            <EditItem />
            <ViewItem />
        </div>
    </div>
  </div>
</template>

<script>
import List from '@/components/Material/List.vue'
import EditItem from '@/components/Material/EditItem.vue'
import ViewItem from '@/components/Material/ViewItem.vue'

// { title: STRING, index: Number, path: String, current: Boolean}
export default {
  name: 'material',
  components: {
      List
  },
  props: {

  },
  data() {
      return {
          page: 0,
      }
  },
  methods: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#material-div {
    display: flex;
}

#list {
    overflow: auto;
    width: 250px;
    min-height: calc(100vh - 45px);
}

#main {
    overflow: auto;
    width: calc(100% - 250px);
    min-height: calc(100vh - 45px);
    background-color: rgba(0, 0, 0, 0);
}
</style>
