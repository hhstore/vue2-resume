<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<router-view></router-view>-->

    <!--简历部分-->
    <resume></resume>
  </div>
</template>

<script>
  import Resume from './components/Resume.vue'

  export default {
    name: 'app',
    components: {
      Resume
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
