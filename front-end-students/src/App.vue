<template>
  <v-app id="app">
    <v-app-bar app clipped-left dense>
      <v-toolbar-title class="title">
        STEM-4-Kids Online
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" dark/>
    </v-app-bar>
    <v-navigation-drawer class="nav-bar" app clipped v-model="drawer" color="rgb(255,255,255)" >
      <v-tabs @change="route" vertical background-color="rgba(0,0,0,0)" :grow="true">
        <div v-for="(tab, index) in tabs" :key="'nav-bar-tab-' + tab.title + index">
          <v-icon>mdi-{{tab.img}}</v-icon>
          <v-tab v-if="tab.type == 'link'">
            {{tab.title}}
          </v-tab>
          <v-subheader v-if="tab.type == 'subheader'" class="mt-4 grey--text text--darken-1">{{tab.title}}</v-subheader>
        </div>
      </v-tabs>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    tabs: [
      {type: 'link', title: 'Your Courses', img: 'mdiBookMultiple ', path: '/'},
    ],
  }),
  methods: {
    getImgUrl(pic) {
      var images = require.context('./assets/nav-bar-icons', false, /\.svg$/);
      return images('./' + pic + ".svg");
    },
    route(index) {
      console.log(index);
      window.scroll({
        top: 0,
        behavior: 'auto'
      });
    },
  },
  computed: {
  },
  created () {

  },
  mounted() {
  }
};
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #282733;
  display: block;
}

html::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(124, 102, 102, 0.3);
    background-color: rgba(6, 6, 6, 0)
}

html::-webkit-scrollbar
{
    width: 5px;
    background-color: rgba(6, 6, 6, 0.007)
}

html::-webkit-scrollbar-thumb
{
    -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0);
    background-color: rgba(255, 255, 255, 0.288);
}
</style>
<style>/* Animations */
@keyframes hide {
  from {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
}
</style>
<style>/* Flex */
.flex {
  display: flex;
}

.flex-center {
  justify-content: center;
}

.flex-left {
  justify-content: left;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-space-around {
  justify-content: space-around;
}

.flex-space-between {
  justify-content: space-between;
}

.flex-align-center {
  align-items: center;
}

.flex-align-top {
  align-items: top;
}

.flex-align-flex-end {
  align-items: flex-end;
}
</style>
<style>
header.v-toolbar {
  background-color: #1565C0 !important;
}

.title {
  color: white;
}

.v-navigation-drawer__content {
  background-color: #ffffff;
}

div.v-tab {
  width: 100% !important;
  justify-content: left;
  text-transform: capitalize;
}

.v-tabs--vertical .v-tabs-slider-wrapper .v-tabs-slider {
  background-color: #fa8639 !important;
  width: 4px !important;
}

.nav-drawer-title img {
  --size: 50;
  width: calc(var(--size) * 1px);
  height: calc(var(--size) * 1px);
}

.v-toolbar__content img {
  --size: 40;
  width: calc(var(--size) * 1px);
  height: calc(var(--size) * 1px);
  margin-right: 2px;
}

.v-tabs-bar {
  width: 100%;
}

.nav-icon {
  --size: 24;
  width: calc(var(--size) * 1px);
  height: calc(var(--size) * 1px);
  margin-right: 24px;
  margin-left: 10px;
}


/* 1264 */
</style>