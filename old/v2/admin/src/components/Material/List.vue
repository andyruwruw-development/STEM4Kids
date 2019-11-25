<template>
  <div class="material-list">
    <div id="material-list-div">
        <div id="subject">
            <h1>subject</h1><h1 @click="deleteSubject" id="subject-text">{{subject}}</h1>
        </div>
        <div class="subtopics" v-for="subtopic in list" v-bind:key="subtopic.title">
            <div class="subtopic-block">{{subtopic.title}}</div>
            <div class="subtopic-item" v-for="item in subtopic.list" v-bind:key="item.title">{{item.title}}</div>
        </div>
    </div>
  </div>
</template>

<script>
// { title: STRING, index: Number, path: String, current: Boolean}
export default {
  name: 'material-list',
  methods: {
      async deleteSubject() {
          await this.$store.dispatch("changeSubject", {subject: null});
      }
  },
  computed: {
      subject() {
          return "javascript";
          return this.$store.state.subject;
      },
      list() {
          return [
              {
                  title: "1. Variables",
                  list: [
                      {
                          title: "Intro to C++",
                      },
                      {
                          title: "HELLO THERE",
                      }
                  ],
              },
              {
                  title: "1. Variables",
                  list: [
                      {
                          title: "Intro to C++",
                      },
                  ],
              }
          ]
          return this.$store.state.list;
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subtopics {
    margin-bottom: 10px;
}
.subtopic-block {
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.308);
    color: rgb(201, 201, 201);
    padding: 5px 10px; 
    text-align: left;
    margin-bottom: 5px;
}

.subtopic-item {
    width: 75%;
    margin: 0 auto;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.164);
    color: rgb(180, 180, 180);
    padding: 5px 10px; 
    text-align: left;
    margin-bottom: 5px;
}

#material-list-div {
    display: block;
    background-color: rgb(54, 57, 63);
    color: rgb(135, 139, 148);
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