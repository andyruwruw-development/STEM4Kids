<template>
  <div class="material-list">
    <div id="material-list-div">
        <div id="subject">
            <h1>subject</h1><h1 id="subject-text">{{subject}}</h1>
        </div>
        
    </div>
  </div>
</template>

<script>
// { title: STRING, index: Number, path: String, current: Boolean}
export default {
  name: 'material-list',
  methods: {

  },
  computed: {
      subject() {
          return "javascript";
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#material-list-div {
    display: block;
    background-color: rgb(54, 57, 63);
    color: rgb(174, 176, 180);
    height: 100%;
}

#subject {
    display: flex;
    overflow: hidden;
    margin: 0;
    justify-content: center;
    align-items: center;
}

#subject-text {
    display: block;
    max-width: 60%;
    background-color: rgb(48, 51, 57);
    padding: 5px 20px;
    color: rgb(88, 92, 98);
    margin-left: 10px;
    border-radius: 20px;
    overflow: hidden;
    transition: all .4s ease;
}

#subject-text:hover {
    background-color: rgb(241, 242, 243);
    color: rgb(48, 49, 51);
}

h1 {
    font-size: 1.1em;
    font-weight: lighter;
}
</style>