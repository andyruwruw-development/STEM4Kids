<template>
  <div class="headercomp">
    <span id="span"></span>
    <div id="header-div">
        <div class="flex-left">
            <div id="logo">STEM4Kids</div>
            <div @click="clickedLink(item.index)" class="item" v-for="item in path" v-bind:key="item.title">
                <p class="item-title">{{item.title}}</p>
                <p v-if="!item.current">></p>
            </div>
        </div>
        <div class="flex-right">
        </div>
    </div>
  </div>
</template>

<script>
// { title: STRING, index: Number, path: String, current: Boolean}
export default {
  name: 'headercomp',
  props: {
    path: Array
  },
  methods: {
      clickedLink(index) {
          this.$router.push(this.path[index].path);
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#span {
    display: block;
    height: 56px;
    width: 100vw;
    margin-bottom: 30px;
}

#header-div {
    display: flex;
    width: calc(100vw);
    height: 56px;

    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0 10px rgba(0,0,0,.54);

    justify-content: space-between;
    min-height: 56px;
    align-items: center;

    background-color: #fff;

    z-index: 5010;

    font-weight: 300;
}

.flex-left {
    display: flex;
    justify-content: left;
    height: 100%;
    width: 70%;

    margin-left: 12px;

    flex-grow: 1;
    transition-duration: .5s;
    width: 100%;
    align-items: center;
}

.flex-right {
    display: flex;
    justify-content: left;
    height: 100%;
    width: 30%;

    margin-right: 12px;

    flex-grow: 1;
    transition-duration: .5s;
    width: 100%;
    align-items: center;
}

#logo {
    color: orange;
    margin-right: 10px;
    cursor:default;
}

.item {
    display: flex;
}

.item-title:hover {
    color: rgba(0,0,0,.54);
    cursor: pointer;
}

p {
    margin: 0px 3px;
    cursor:default;
}

</style>
