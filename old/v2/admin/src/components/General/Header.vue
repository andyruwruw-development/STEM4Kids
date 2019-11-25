<template>
  <div class="headercomp">
    <span id="span"></span>
    <div id="header-div">
        <div class="flex-left">
            <div id="logo">STEM4Kids</div>
        </div>
        <div class="flex-right">
            <div id="location"><div id="location-image"></div><p>Cupertino</p></div>
            <div id="user"><div id="user-image"></div><p>Andrew Young</p></div>
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
          this.$router.go(-1 * this.path[index].back);
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#user, #location {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    transition: all .3s ease;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0);
    margin-right: 10px;
}

#user:hover, #location:hover {
    border: 1px solid rgb(204, 204, 204);
    background-color: rgba(197, 188, 188, 0.151);
    transform: scale(1.03, 1.03);
}

.fade {
    animation: fade 1s ease;
}

@keyframes fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

#span {
    display: block;
    height: 45px;
    width: 50vw;
}

#header-div {
    display: flex;
    width: calc(100vw);
    height: 45px;

    position: fixed;
    top: 0;
    left: 0;
    

    justify-content: space-between;
    min-height: 45px;
    align-items: center;

    background-color: rgb(32, 34, 37);

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
    height: 100%;
    width: 30%;
    justify-content: flex-end;

    margin-right: 12px;

    flex-grow: 1;
    transition-duration: .5s;
    width: 100%;
    align-items: center;
}

@import url('https://fonts.googleapis.com/css?family=Patua+One&display=swap');

#logo {
    background-size: auto 100%;
    background-repeat: no-repeat;
    padding: 7px;
    color: rgb(197, 188, 188);
    font-family: 'Patua One', cursive;
    font-weight: bolder;
    font-size: 1.5em;
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
    color: #a6a7a8;
}

#user-image {
    display: block;
    width: 20px;
    height: 20px;
    background-size: 100% 100%;
    filter: invert(100%);
    margin-right: 5px;
    background-image: url("../../assets/images/general/user.png");
}

#location-image {
    display: block;
    width: 20px;
    height: 20px;
    background-size: 100% 100%;
    filter: invert(100%);
    margin-right: 5px;
    background-image: url("../../assets/images/general/location.png");
}

</style>
