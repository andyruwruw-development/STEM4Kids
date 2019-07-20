<template>
  <div class="headercomp flex flex-space-between">
    <div class="flex">
      <div class="flex flex-vert-cent flex-space-around link right-line" id="logo">
        <div id="logo-icon" class="icon"></div>
      </div>
      <div class="flex flex-vert-cent flex-space-around link right-line">
        <p>Home</p>
      </div>
    </div>
    <div class="flex">
      <div class="flex flex-vert-cent flex-space-around link left-line" id="notification">
        <div id="inbox-icon" class="icon left"></div>
      </div>
      <div class="flex flex-vert-cent flex-space-around link left-line" id="profile">
        <div id="profile-icon" class="icon left"></div>
        <p>{{user.username}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headercomp',
  data() {
      return {

      }
  },
  methods: {
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  created() {
  }
}
</script>

<style scoped>
/* General */
.headercomp {
  width: 100vw;
  height: 65px;
  background-color: rgb(44, 129, 220);
  box-shadow: 0px 3px 3px rgb(190, 190, 190);
}
</style>

<style scoped>
/* Links */
.link {
  height: 100%;
  min-width: 50px;
  border: 1px solid rgb(199, 199, 199);
  padding: 0px 15px;
  transition: all .2s ease;
  cursor: pointer;
  color: #8b98a7;
}

.active {
  background-color: rgba(224, 244, 253, 0.5) !important;
  color: #2c3e50;
}

.link:hover:not(.active) {
  padding: 0px 20px;
  background-color: rgb(49, 163, 216);
  color: white;
}

.left-line {
  border-right: 0px;
  border-top: 0px;
  border-bottom: 0px;
}

.right-line {
  border-left: 0px;
  border-top: 0px;
  border-bottom: 0px;
}

p {
  font-weight: lighter;
  text-align: center;
  font-size: .9em;
}

#login {
  padding: 0px 30px;
}

#register {
  padding: 0px 30px;
}
</style>

<style scoped>
/* Logos */
.icon
{
  display: block;
  width: 30px;
  height: 30px;
  background-size: 100% 100%;
  background-position: center;
}

.icon.left {
  margin-right: 10px;
}

#logo-icon {
  width: 40px;
  height: 40px;
  background-image: url("../../assets/General/logo.png");
  opacity: .8;
  transition: all .2s ease;
}

.link:hover #logo-icon {
  opacity: 1;
}

#inbox-icon {
  background-image: url("../../assets/General/inbox.png");
  opacity: .8;
  transition: all .2s ease;
}

.link:hover #inbox-icon {
  opacity: 1;
}


.link:hover #profile-icon {
  opacity: 1;
}


.link:hover #files-icon {
  opacity: 1;
}
</style>

