<template>
  <div class="courseview">
    <div id="course-name-div">
      <h1 id="course-name">{{course.name}}</h1>

    </div>
    <div id="course-list">
        <div v-for="chapter in course.list" v-bind:key="chapter.name" class="chapter-div">
            <div @click="openChapter(chapter.index)" class="chapter-title-div flex flex-vert-cent">
              <div class="chapter-image" v-bind:class="{active : chapter.active, inactive : !chapter.active}"><div v-if="chapter.active" class="tooltip">Enabled</div></div>
              <div class="chapter-title-main-div">
                <h1 class="chapter-title">{{chapter.title}}</h1>
              </div>
            </div>
            <div v-if="chapter.open" class="chapter-items-div">
                <div @click="selectLink(item.type, item.path)" v-for="item in chapter.list" v-bind:key="item.name" class="chapter-item">
                    <h1>{{item.name}}</h1>
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
      }
  },
  methods: {
    async selectLink(type, link) {

    },
    openChapter(index) {
        this.course.list[index].open = !this.course.list[index].open;
    }
  },
  computed: {
    courseData() {
        return {
            name: "Introduction to Python",
            list: [
                {
                    title: "For-Loops",
                    active: true,
                    open: false,
                    list: [
                        {
                            name: "Intro to Loops"
                        }
                    ]
                }
            ],
        }
      //return this.$store.state.profile.courses;
    },
  },
  created() {
      console.log(this.courseData);
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
  background-color: white;
  margin-top: 30px;
}

h1 {
  display: block;
  margin: 0px;
}
</style>

<style scoped>
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
  font-size: 1.3em;
  font-weight: normal;
  color: rgba(32, 43, 63, 0.842);
}

.chapter-title-main-div {
  display: block;
}

.active {
  background-image: url("../../assets/Curriculum/Chapter/chapter-active.png");
}

.inactive {
  background-image: url("../../assets/Curriculum/Chapter/chapter-inactive.png");
}
</style>

<style scoped>

.chapter-item {
    cursor: pointer;
}
</style>

<style scoped>
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