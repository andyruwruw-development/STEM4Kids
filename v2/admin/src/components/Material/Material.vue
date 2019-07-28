<template>
  <div class="material">
    <div id="material-div">
        <SubjectMenu v-if="subject == null" id="list"/>
        <List v-if="subject != null" id="list"/>
        <div id="main">
            <ItemEdit v-if="!toggle"/>
            <ItemView v-if="toggle"/>
        </div>
    </div>
  </div>
</template>

<script>
import SubjectMenu from '@/components/Material/SubjectMenu.vue'
import List from '@/components/Material/List.vue'
import ItemEdit from '@/components/Material/ItemEdit.vue'
import ItemView from '@/components/Material/ItemView.vue'

// { title: STRING, index: Number, path: String, current: Boolean}
export default {
  name: 'material',
  components: {
      List,
      ItemEdit,
      ItemView,
      SubjectMenu,
  },
  props: {

  },
  data() {
      return {
          page: 0,
          toggle: true,
      }
  },
  methods: {

  },
  computed: {
    subject() {
        return "";
        return this.$store.state.subject;
    }
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
    width: 18vw;
    min-width: 250px;
    min-height: calc(100vh - 45px);
}

#main {
    overflow: auto;
    width: calc(100% - 250px);
    min-height: calc(100vh - 45px);
    background-color: rgba(0, 0, 0, 0);
}
</style>



