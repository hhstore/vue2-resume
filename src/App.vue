<template>
  <div id="app">
    <img src="./assets/logo.png">

    <!--

    # 关于 router-view 和 vue-router:
    #   - router-view 是黑盒,
    #   - 隐藏通过 router, 找到路由, 根据 URL 匹配到组件
    #
    https://www.vue-js.com/topic/587c68a9a9c1282817afc077

    -->

    <router-view></router-view>

    <!--简历部分-->
    <!--<resume></resume>-->
  </div>
</template>

<script>
  //  import Resume from './components/Resume.vue'

  export default {
    name: 'app',
    components: {
//      Resume
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
