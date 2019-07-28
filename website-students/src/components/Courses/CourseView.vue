<template>
  <div class="courseview">
    <h1>{{course.name}}</h1>
    <div id="list">
        <div v-for="chapter in course.list" v-bind:key="chapter.name" @click="openChapter(chapter.index)" class="chapter-div">
            <div class="chapter">
                <h1>{{chapter.title}}</h1>
            </div>
            <div v-if="chapter.open" class="chapter-items-div">
                <div @click="selectLink(item.type, item.path)" v-for="item in chapter.list" v-bind:key="item.name" class="item">
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
h1 {

}
.chapter {
    cursor: pointer;
}

.item {
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