<template>

  <div v-if="items.length>0">


    <div>
      <table class="ui table teal cv-tb-job">
        <thead>
        <tr>
          <td></td>
        </tr>
        </thead>
        <!--单独的标题项-->
        <tbody>
        <tr>
          <h3 class="ui blue header">
            <i class="small cubes icon teal"></i>{{group}}
          </h3>
        </tr>
        </tbody>

        <tbody>
        <tr v-for="item in items">
          <!--项目访问地址-->
          <td>
            <h4><i class="github icon teal"></i><a target="_blank" v-bind:href="'https://'+item.url">{{
                item.url
              }}</a>
            </h4>
          </td>
          <!--项目类型-->
          <td><h4>{{ item.tech_main_type }}</h4></td>
          <!--项目简介-->
          <td><h4><i class="pointing right purple icon"></i>{{ item.brief }}</h4></td>
        </tr>
        </tbody>
      </table>
    </div>


  </div>



</template>

<script>
export default {
  props: {
    group: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped lang="less">
@import "./Resume.less";
</style>

