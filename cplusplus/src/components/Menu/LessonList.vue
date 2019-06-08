<template>
  <div class="lessonlist">
    <div id="list">
      <div id="top-bar">
        <h1>Table of Contents</h1>
        <div class="progress">
          <h2 class="quizes-progress">Quizes</h2>
          <h2 class="exercises-progress">Exercises</h2>
          <h2 class="participation-progress">Participation</h2>
          <div class="collapse-expand"></div>
        </div>





      </div>
      <div v-for="subtopic in list" v-bind:key="subtopic.title">
        <div @click="openSubTopic(subtopic.index)" class="subtopic">
          {{subtopic.index}}. {{subtopic.title}}
          <div class="progress">
            <h3 class="quizes-progress">
              <div v-bind:class="{greenempty: subtopic.quizcompleted != subtopic.quizfull, greenfilled: subtopic.quizcompleted == subtopic.quizfull}" class="icon-indicator"></div>
              {{percentage(subtopic.quizcompleted, subtopic.quizfull)}}
            </h3>
            <h3 class="exercises-progress">
              <div v-bind:class="{blueempty: subtopic.challengecompleted != subtopic.challengefull, bluefilled: subtopic.challengecompleted == subtopic.challengefull}" class="icon-indicator"></div>
              {{percentage(subtopic.challengecompleted, subtopic.challengefull)}}
            </h3>
            <h3 class="participation-progress">
              <div v-bind:class="{orangeempty: subtopic.participationcompleted != subtopic.participationfull, orangefilled: subtopic.participationcompleted == subtopic.participationfull}" class="icon-indicator"></div>
              {{percentage(subtopic.participationcompleted, subtopic.participationcompleted)}}
            </h3>
            <div v-bind:class="{expanded: openComputed[subtopic.index], collapsed: !openComputed[subtopic.index]}" class="collapse-expand"></div>
          </div>
          
        </div>
        <div class="lessons-div" v-if="openComputed[subtopic.index]">
          <div @click="route(subject, subtopic.index, item.index, item.type)" class="lesson" v-for="item in subtopic.items" v-bind:key="item.index">
            {{subtopic.index}}.{{item.index}} {{item.title}}
            <div class="progress">
              <h3 class="quizes-progress">
                <div v-bind:class="{greenempty: item.quizcompleted != item.quizfull, greenfilled: item.quizcompleted == item.quizfull}" class="icon-indicator"></div>
                {{percentage(item.quizcompleted, item.quizfull)}}
              </h3>
              <h3 class="exercises-progress">
                <div v-bind:class="{blueempty: item.challengecompleted != item.challengefull, bluefilled: item.challengecompleted == item.challengefull}" class="icon-indicator"></div>
                {{percentage(item.challengecompleted, item.challengefull)}}
              </h3>
              <h3 class="participation-progress">
                <div v-bind:class="{orangeempty: item.participationcompleted != item.participationfull, orangefilled: item.participationcompleted == item.participationfull}" class="icon-indicator"></div>
                {{percentage(item.participationcompleted, item.participationfull)}}
              </h3>
              <div class="collapse-expand"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'lessonlist',
  data() {
    return {
      subject: "CPlusPlus",
      open: [],
      test: [false],
      changed: false,
    }
  },
  methods: {
    percentage(done, full) {
      return ((done / full) * 100) + "%";
    },
    openSubTopic(index) {
      this.open[index] = !this.open[index];
      this.changed = true;
    },
    route(subject, subtopicIndex, index, type) {
      this.$router.push(type + "/" + subject + "/" + subtopicIndex + "/" + index);
    }
  },
  computed: {
    list() {
      //return this.$store.state.list;
      return [
        {
          index: 1,
          title: "Introduction to C++",

          quizcompleted: 5,
          quizfull: 10,
          challengecompleted: 5,
          challengefull: 10,
          participationcompleted: 10,
          participationfull: 10,

          items: [
            {
              type: "lesson",
              index: 1,
              title: "Programming (general)",

              quizcompleted: 5,
              quizfull: 10,
              challengecompleted: 5,
              challengefull: 10,
              participationcompleted: 10,
              participationfull: 10,
            }
          ]
        },
                {
          index: 2,
          title: "Variables / Assignements",

          quizcompleted: 5,
          quizfull: 10,
          challengecompleted: 5,
          challengefull: 10,
          participationcompleted: 10,
          participationfull: 10,

          items: [
            {
              index: 1,
              title: "Test",

              quizcompleted: 5,
              quizfull: 10,
              challengecompleted: 5,
              challengefull: 10,
              participationcompleted: 10,
              participationfull: 10,
            }
          ]
        },
        
      ]
    },
    openComputed() {
      if (this.changed) {
        this.changed = false;
      }
      return this.open;
    }
  },
  async created() {
    this.open.push(false);
    for (var i = 0; i < this.list.length; i++)
    {
      this.open.push(false);
    }
  }

}
</script>
/*
list
    [                                                
        {                                                      
            index: NUMBER,
            title: STRING,

            quizcompletion: Number,
            challengecompletion: Number,
            Participation: Number,

            items: [
                {
                    index: Number,
                    title: String,

                    quizcompletion: Number,
                    challengecompletion: Number,
                    Participation: Number,
                }
            ]
        }
    ]
*/

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#list {
    display: block;
    width: 100%;
    height: 100%;
}

#top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 22px);
  padding: 10px;
  background-color: #fff;
  border: 1px solid #b0bec5;
  margin-bottom: 10px;
  border-radius: 10px;
  height: 30px;
  box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.212);
}

.subtopic {
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.212);
  width: calc(100% - 22px);
  padding: 10px;
  background-color: #fff;
  border: 1px solid #b0bec5b4;
  border-radius: 10px;
  height: 30px;
  cursor: pointer;
}

.lesson {
  font-size: .9em;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.212);
  width: calc(100% - 42px);
  padding: 10px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.671);
  border: 1px solid #b0bec5b4;
  border-radius: 10px;
  height: 30px;
  cursor: pointer;
  margin-left: auto;
}

.progress {
  display: grid;
  grid-template-columns: auto auto auto 30px;
  width: 282px;
  margin-right: 10px;
}

.exercises-progress {
  color: rgb(0, 103, 221);
}

.quizes-progress {
  color: rgb(0, 139, 12);
}

.participation-progress {
  color: orange;
}

h1 {
  color: rgb(0, 0, 0);
  font-size: 1em;
  font-weight: lighter;
  margin: 0;
}

h2 {
  font-size: .8em;
  font-weight:lighter;
  margin: 0;
  text-align: center;
  width: 84px;
}

h3 {
  font-size: .9em;
  font-weight:lighter;
  margin: 0;
  text-align: center;
  width: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.icon-indicator {
  display: block;
  width: 18px;
  height: 18px;
  background-size: 100% 100%;
  margin-right: 5px;
}

.orangeempty {
  background-image: url("../../assets/images/general/orange-empty.png");
}

.orangefilled {
  background-image: url("../../assets/images/general/orange-filled.png");
}

.greenempty {
  background-image: url("../../assets/images/general/green-empty.png");
}

.greenfilled {
  background-image: url("../../assets/images/general/green-filled.png");
}

.blueempty {
  background-image: url("../../assets/images/general/blue-empty.png");
}

.bluefilled {
  background-image: url("../../assets/images/general/blue-filled.png");
}

.collapse-expand {
  display: block;
  width: 15px;
  height: 15px;
  margin-left: 15px;
  background-size: 100% 100%;
}

.collapsed {
  background-image: url("../../assets/images/general/collapsed.png");
}

.expanded {
  background-image: url("../../assets/images/general/expanded.png");
}

.lessons-div {
  margin-bottom: 20px;
}

</style>
