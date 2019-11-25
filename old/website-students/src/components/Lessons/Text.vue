<template>
  <div class="renderedtext">
    <div id="text-div">
        <p v-for="word in rendered" v-bind:key="word.index" v-bind:class="{ bold: word.type == 'bold'}">{{word.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'renderedtext',
  props: {
      text: String,
  },
  data() {
      return {
          rendered: [],
      }
  },
  created() {  
      let string = ""
      
      for (var i = 0; i < this.text.length; i++)
      {
        if (this.text[i] == " " && string != "") {
            this.rendered.push({type: "regular", text: string, index: i});
            string = "";
        }
        else if (this.text.substring(i, i + 3) == "<b>") {
            
            i += 3
            let j = i;
            while (this.text.substring(j, j + 3) != "<b>") {
                string += this.text[j];''
                j += 1;
                i += 1;
            }
            i += 3
            this.rendered.push({type: "bold", text: string, index: i});
            string = "";
        }
        else {
            string += this.text[i];
        }  
      }
  } 
}
</script>

<style scoped>
/* Course Details */
#text-div {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}

.bold {
    font-weight: bolder;
}

p {
    font-size: 16px;
    padding-right: 8px;
    text-align: left;
}

</style>