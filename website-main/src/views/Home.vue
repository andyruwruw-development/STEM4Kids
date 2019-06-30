<template>
  <div class="home">
    <Header id="header" />
    <div v-for="item in data.home" v-bind:key="item.index">
      <Slider v-if="item.type == 'slider'" v-bind:data="item"/>
      <Paragraph v-if="item.type == 'paragraph'" v-bind:data="item"/>
      <MediaLinksList v-if="item.type == 'medialinkslist'" v-bind:data="item"/>
      <CatagoryLinks v-if="item.type == 'catagorylinks'" v-bind:data="item"/>
      <FeaturedLink v-if="item.type == 'featuredlink'" v-bind:data="item"/>
    </div>
    <Footer/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'
import Footer from '@/components/General/Footer.vue'

import Slider from '@/components/Home/Slider.vue'
import Paragraph from '@/components/Home/Paragraph.vue'
import MediaLinksList from '@/components/Home/MediaLinksList.vue'
import CatagoryLinks from '@/components/Home/CatagoryLinks.vue'
import FeaturedLink from '@/components/Home/FeaturedLink.vue'


export default {
  name: 'home',
  components: {
    Header,
    Footer,
    Slider,
    Paragraph,
    MediaLinksList,
    CatagoryLinks,
    FeaturedLink
  },
  computed: {
    data() {
      return this.$store.state.data;
    }
  },
  async create() {
    await store.dispatch('getData');
  }
}
</script>

<style scoped>
span {
  display: block;
  height: 50vh;
}
</style>