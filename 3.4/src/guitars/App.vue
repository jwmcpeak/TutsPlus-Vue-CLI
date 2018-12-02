<template>
  <div id="app">
    <h1>This is the Guitars Page</h1>
    <a href="index.html">Go to index</a>

    <br />
    <img :src="`${baseUrl}assets/images/les-paul.jpg`" alt="">
    <img :src="`${baseUrl}assets/images/se-cu-24.jpg`" alt="">
    <img :src="`${baseUrl}assets/images/strat.jpg`" alt="">
    <img :src="`${baseUrl}assets/images/talman.jpg`" alt="">
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      baseUrl: process.env.BASE_URL
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
