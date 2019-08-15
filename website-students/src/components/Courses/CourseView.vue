<template>
  <div class="courseview">
    <div id="course-name-div">
      <h1 id="course-name">{{course.name}}</h1>
    </div>
    <div id="course-list">
        <div v-for="chapter in courseData.list" v-bind:key="chapter.name" class="chapter-div">
            <div @click="openChapter(chapter.index)" class="chapter-title-div flex flex-vert-cent">
              <div class="chapter-image" v-bind:class="{active : chapter.active, inactive : !chapter.active}"><div v-if="chapter.active" class="tooltip">Enabled</div></div>
              <div class="chapter-title-main-div">
                <h1 class="chapter-title">Chapter {{chapter.index + 1}}: {{chapter.title}}</h1>
              </div>
            </div>
              <div v-bind:class="{expand: chapter.open}" class="chapter-items-div">
                <div @click="selectLink(item)" v-for="item in chapter.list" v-bind:key="item.section" class="chapter-item flex flex-vert-cent">
                  <div class="chapter-item-image" v-bind:class="{active : chapter.active, inactive : !chapter.active, quizimage : item.type == 'quiz', exerciseimage : item.type == 'exercise', lessonimage : item.type == 'lesson'}"><div v-if="item.active" class="tooltip">Enabled</div></div>
                  <div class="flex">
                    <h1 class="chapter-item-title chapter-item-section" v-if="item.type == 'lesson'">{{chapter.index + 1}}.{{item.section}}</h1>
                    <h1 class="chapter-item-title chapter-item-section" v-if="item.type == 'quiz'">Quiz:</h1>
                    <h1 class="chapter-item-title chapter-item-section" v-if="item.type == 'exercise'">Exercise:</h1>
                    <h1 class="chapter-item-title">{{item.title}}</h1>
                  </div>
                  
                </div>
              </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'courseview',
  data() {
      return {
          course: null,
          open: -1,
      }
  },
  methods: {
    async selectLink(item) {
      if (item.type == "lesson") {
        this.$router.push({name:'lesson',params:{course:item.course, chapter: item.chapter, section: item.section}})
      }
      else if (item.type == "quiz") {
        this.$router.push({name:'quiz',params:{course:item.course, chapter: item.chapter, section: item.section}})
      }
      else if (item.type == "exercise") {
        this.$router.push({name:'exercise',params:{course:item.course, chapter: item.chapter, section: item.section}})
      }
      else {
        console.log("Invalid Type: Most likely an internal server issue.")
      }
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async openChapter(index) {
      if (this.open != index && this.open != -1) {
        this.course.list[this.open].open = !this.course.list[this.open].open;
        await this.sleep(200);
      }
      this.course.list[index].open = !this.course.list[index].open;
      if (this.course.list[index].open)
      {
        this.open = index;
      }
      else {
        this.open = -1;
      }

    }
  },
  computed: {
    courseData() {
      return {
        name: "Introduction to Python",
        list: 
        [
          {
            title: "Loops",
            index: 0,
            active: true,
            open: false,
            list: [
              {
                title: "Intro to Loops",
                course: "Introduction to Python",
                chapter: "Loops",
                section: 1,
                active: true,
                type: "lesson",
              },
              {
                title: "While Loops",
                course: "Introduction to Python",
                chapter: "Loops",
                section: 2,
                active: true,
                type: "quiz",
              },
              {
                title: "For Loops",
                course: "Introduction to Python",
                chapter: "Loops",
                section: 3,
                active: true,
                type: "exercise",
              }
            ]
          },
          {
            title: "Loops",
            index: 0,
            active: false,
            open: false,
            list: [
              {
                title: "Intro to Loops",
                course: "Introduction to Python",
                chapter: "Loops",
                section: 1,
                active: false,
                type: "quiz",
              },
              {
                title: "While Loops",
                course: "Introduction to Python",
                chapter: "Loops",
                section: 2,
                active: false,
                type: "lesson",
              },
              {
                title: "For Loops",
                course: "Introduction to Python",
                chapter: "Loops",
                section: 3,
                active: false,
                type: "exercise",
              }
            ]
          },
          {
            title: "Loops",
            index: 0,
            active: false,
            open: false,
            list: [
              {
                title: "Intro to Loops",
                course: "Introduction to Python",
                chapter: "Loops",
                section: 1,
              },
              {
                title: "While Loops",
                course: "Introduction to Python",
                chapter: "Loops",
                section: 2,
              },
              {
                title: "For Loops",
                course: "Introduction to Python",
                chapter: "Loops",
                section: 3,
              }
            ]
          }
        ],
      }
    //return this.$store.state.profile.courses;
    },
  },
  created() {
      this.course = this.courseData;
      for (var i = 0; i < this.course.list.length; i++)
      {
          this.course.list[i].index = i;
          this.course.list[i].open = false;
      }
  }
}
</script>

<style scoped>
/* Course Details */
.courseview {
  display: block;
  width: 90vw;
  max-width: 900px;
  margin: 0 auto;
}

#course-name
{
  display: block;
  font-size: 1.5em;
  color: grey;
  text-align: left;
  font-weight: lighter;
  margin: 0px;
}

#course-name-div
{
  display: flex;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0);
  margin-top: 30px;
}

h1 {
  display: block;
  margin: 0px;
}
</style>

<style scoped>
/* Chapter Style */
.chapter-title-div {
  cursor: pointer;
  margin-top: 20px;
  height: 80px;
  padding: 5px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(12, 12, 12, 0.13);
  border: 2px solid rgba(255, 255, 255, 0);
  transition: all .2s ease;
}

.chapter-title-div:hover {
  border: 2px solid rgba(98, 179, 255, 0.925);
}

.chapter-image
{
  display: block;
  background-size: 130% 130%;
  background-position: -6px -6px;
  border-radius: 200px;
  border: 2px solid rgba(128, 128, 128, 0.411);
  width: 40px;
  height: 40px;
  margin: 15px;
  position: relative;
}

.tooltip {
  position: absolute;
  display: block;
  padding: 5px;
  color: rgba(23, 162, 255, 0.623);
  margin-left: auto;
  margin-right: auto;
  left: -11px;
  bottom: -23px;
  border-radius: 20px;
  padding: 5px 10px;
  font-weight: bolder;
  font-size: .7em;
  opacity: 0;
  transition: all .3s ease;
}

.chapter-image:hover .tooltip {
  opacity: 1;
}

.chapter-title {
  font-size: 1.5em;
  font-weight: normal;
  color: rgba(32, 43, 63, 0.842);
}

.chapter-title-main-div {
  display: block;
}

.chapter-image.active {
  background-image: url("../../assets/Curriculum/Chapter/chapter-active.png");
}

.chapter-image.inactive {
  background-image: url("../../assets/Curriculum/Chapter/chapter-inactive.png");
}
</style>

<style scoped>
/* Course Items */
.chapter-item {
    cursor: pointer;
    margin: 0 auto;
    margin-top: 5px;
    height: 60px;
    padding: 5px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 3px 3px 3px rgba(12, 12, 12, 0.13);
    border: 2px solid rgba(255, 255, 255, 0);
    transition: all .2s ease;
}

.chapter-item:hover {
  border: 2px solid rgba(98, 179, 255, 0.925);
}

.chapter-item-title {
  font-size: 1.3em;
  font-weight: normal;
  color: rgba(78, 84, 96, 0.842);
}

.chapter-item-section {
  margin-right: 10px;
}

.chapter-item:hover .chapter-item-title {
  color: rgba(66, 132, 255, 0.945);
}

.chapter-item-image {
  
  display: block;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 50%;
  width: 0;
  padding-left: 30px;
  margin: 15px;
  margin-right: 10px;
  position: relative;
  transition: all .2s ease;
  opacity: .8;
}

.chapter-item:hover .chapter-item-image.active {
  transform: scale(1.1, 1.1);
  opacity: 1;
}

.lessonimage.active {
  background-image: url("../../assets/Curriculum/Lesson/lesson-purple.png");
} 

.lessonimage.inactive {
  background-image: url("../../assets/Curriculum/Lesson/lesson-grey.png");
} 

.exerciseimage.active {
  background-image: url("../../assets/Curriculum/Exercise/exercise-orange.png");
} 

.exerciseimage.inactive {
  background-image: url("../../assets/Curriculum/Exercise/exercise-grey.png");
} 

.quizimage.active {
  background-image: url("../../assets/Curriculum/Quiz/quiz-green.png");
} 

.quizimage.inactive {
  background-image: url("../../assets/Curriculum/Quiz/quiz-grey.png");
} 

.chapter-items-div {
  display: block;
  overflow: hidden;
  height: auto;
  max-height: 0px;
  transition: all .2s ease;
}

.expand {
  max-height: calc(100vh);
  transition: all .3s ease;
}

</style>

<style scoped>
/* Colors */
.indianred {
  background-color: rgba(255, 71, 71, 0.982);
}

.crimson {
  background-color: rgba(220,20,60, 0.982);
}

.mediumvioletred	 {
  background-color: rgba(199,21,133, 0.982);
}

.orangered {
  background-color: rgba(255,69,0, 0.982);
}

.darkorange {
  background-color: rgba(255,140,0, 0.982);
}

.gold {
  background-color: rgba(218,165,32, 0.982);
}

.deepmagenta {
  background-color: rgba(139,0,139, 0.982);
}

.indigo {
  background-color: rgba(75,0,130, 0.982);
}

.darkslateblue {
  background-color: rgba(72,61,139, 0.982);
}

.seagreen {
  background-color: rgba(46,139,87, 0.982);
}

.limegreen {
  background-color: rgba(50,205,50, 0.982);
}

.forestgreen {
  background-color: rgba(34,139,34, 0.982);
}

.teal {
  background-color: rgba(0,128,128, 0.982);
}

.steelblue {
  background-color: rgba(70,130,180, 0.982);
}

.royalblue {
  background-color: rgba(65,105,225, 0.982);
}

.mightyblue {
  background-color: rgba(25,25,112, 0.982);
}

.chocolate {
  background-color: rgba(210,105,30, 0.982);
}

.maroon {
  background-color: rgba(128,0,0, 0.982);
}
</style>