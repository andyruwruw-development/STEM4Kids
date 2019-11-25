<template>
  <div class="home">
    <div id="home-div">
      <Header id="header" />
      <div class="item-thing" v-for="item in home" v-bind:key="item.index">
        <Slider v-if="item.type == 'slider'" />
        <Paragraph v-if="item.type == 'paragraph'" v-bind:details="item"/>
        <MediaLinksList v-if="item.type == 'medialinkslist'" />
        <CatagoryLinks v-if="item.type == 'catagorylinks'"/>
        <FeaturedLink v-if="item.type == 'featuredlink'" />
      </div>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>

      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
            <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>

      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
            <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>

      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
            <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>

      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <Footer/>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'
import Footer from '@/components/General/Footer.vue'

import Slider from '@/components/Home/Slider.vue'
import Paragraph from '@/components/Home/Paragraph.vue'
import MediaLinksList from '@/components/Home/MediaLinksList.vue'
import FeaturedLink from '@/components/Home/FeaturedLink.vue'


export default {
  name: 'home',
  components: {
    Header,
    Footer,
    Slider,
    Paragraph,
    MediaLinksList,
    FeaturedLink
  },
  computed: {
    home() {
      return [
        {index: 0, type: "slider"},
        {index: 1,type: "paragraph", title: "Hey there this is a title!", paragraph:"UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU"},
        {index: 2,type: "paragraph", title: "Hey there this is a title!", paragraph:"UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU"},
        {index: 3,type: "paragraph", title: "Hey there this is a title!", paragraph:"UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU"},
        {index: 4,type: "paragraph", title: "Hey there this is a title!", paragraph:"UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU"},
        {index: 5,type: "paragraph", title: "Hey there this is a title!", paragraph:"UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU"},
        {index: 6,type: "paragraph", title: "Hey there this is a title!", paragraph:"UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU"},
        {index: 7,type: "paragraph", title: "Hey there this is a title!", paragraph:"UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU"},
        {index: 8,type: "paragraph", title: "Hey there this is a title!", paragraph:"UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU"},
        {index: 9,type: "paragraph", title: "Hey there this is a title!", paragraph:"UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU"},
      ];
    }
  },
  async create() {
    await this.$store.dispatch('getData');
  }
}
</script>

<style scoped>
#header-div {
  display: block;
}
#header {
  position: fixed;
  top: 0px;
  left: 0px;
}

.item-thing {
  display: block;
  width: 100vw;
  min-height: 10vh;
  padding-bottom: 80px;
}
</style>