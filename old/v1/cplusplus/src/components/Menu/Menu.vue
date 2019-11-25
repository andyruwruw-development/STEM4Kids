<template>
  <div class="menucomp">
    <div id="menu-div">
        <div class="flex wrap" id="center-flex">
            <lesson-list id="LessonList"/>
            <menu-profile id="MenuProfile"/>
        </div>
    </div>
  </div>
</template>

<script>
import LessonList from '@/components/Menu/LessonList.vue'
import MenuProfile from '@/components/Menu/MenuProfile.vue'

// { title: STRING, index: Number, path: String, current: Boolean}
export default {
  name: 'menucomp',
  components: {
      LessonList,
      MenuProfile,
  },
  props: {

  },
  methods: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#menu-div {
    width: 90%;
    max-width: 1300px;

    height: calc(100vh - 150px);
    margin: 0 auto;
    overflow: hidden;
}

#LessonList {
    flex-grow: 3;
    display: block;
    height: 100%;
    min-width: 375px;
    overflow: auto;
}

#MenuProfile {
    display: block;
    flex-grow: 1;
    flex-shrink: 0;
    height: 100%;
    min-width: 375px;
    max-width: 375px;

}

.flex {
    display: flex;
    
}

.wrap {
    flex-wrap: wrap;
}

#center-flex {
    height: 100%;
    justify-content: center; 
    overflow: hidden;
}

@media screen and (max-width: 866px) {
    #LessonList {
        overflow: hidden;
    }
    #center-flex {
        overflow: auto; 
    }
}

</style>
