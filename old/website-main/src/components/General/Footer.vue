<template>
  <div class="footercomp">
    <div id="footer-div">
        <div class="flex row">
            <div class="section">
                <h1>ABOUT US</h1>
                <h2>Our Philosophy</h2>
                <h2>What is STEM?</h2>
                <h2>Why Robotics?</h2>
            </div>
            <div class="section">
                <h1>LOCATIONS</h1>
            </div>
            <div class="section">
                <h1>CAMPS</h1>

            </div>
        </div>
        <div class="flex row">
            <div class="section">
                <h1>JOIN THE TEAM</h1>
                <h2></h2>
                <h2></h2>
            </div>
            <div class="section">
                <h1>CONTACT STEM4KIDS</h1>
            </div>
            <div class="section">
                <h1>CONNECT WITH STEM4KIDS</h1>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footercomp',
  props: {
    data: Object,
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer-div {
    display: block;
    width: 100vw;
    background-color: rgb(46, 46, 46);
    padding: 50px 0px;
}

.row {
    width: 100%;
    justify-content: center;
    align-items: flex-start;
}

.section {
    display: block;
    width: 25vw;
}
</style>

<style scoped>
h1 {
    color: rgb(223, 223, 223);
    font-size: .8em;
    text-align: left;
    font-weight: bolder;
    font-family: 'Roboto', sans-serif;
}
h2 {
    font-size: .8em;
    color: rgb(215, 215, 215);
    text-align: left;
    font-weight: lighter;
    font-family: 'Roboto', sans-serif;
}
</style>