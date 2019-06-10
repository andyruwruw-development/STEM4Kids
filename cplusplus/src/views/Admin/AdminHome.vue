<template>
  <div class="adminhome">
    <Header v-bind:path="path"/>
    <div id="admin-div">
        <div id="admin-buttons">
            <button>Lessons</button>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'

export default {
  name: 'adminhome',
  components: {
    Header,
  },
  data() {
    return {
      path: [{title: "Admin Home", index: 0, path: "/admin", current: true}]
    }
  },
  computed: {
    admin() {
      return this.$store.state.admin;
    }
  },
  created() {
    if (this.admin == null)
    {
      this.$router.push("/admin/login");
    }
  }
}
</script>

<style scoped>
#Menu {
  margin: 0 auto;
}

#admin-div {
    display: block;
    height: 80vh;
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;
    background-color: red;
}

#admin-buttons {
    display: flex;
    justify-content: space-around;
}

button {
    display: block;
    width: 100px;
    height: 100px;

}
</style>