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

        <tbody v-for="item in items">
        <tr>
          <!--项目名称-->
          <td><h4><i class="cube icon teal"></i><a target="_blank" v-bind:href="item.url">{{ item.name }}</a></h4></td>
          <!--项目官网-->
          <td><h4><a target="_blank" v-bind:href="item.url"><i class="internet explorer icon teal"></i>项目官网</a></h4>
          </td>
          <!--项目周期-->
          <td class="right aligned"><h4>{{ item.duration }}</h4></td>
          <!--担任职位-->
          <td class="right aligned"><h4><i class="user icon teal"></i>{{ item.title }}</h4></td>
          <!--所在企业-->
          <td class="right aligned"><h4>{{ item.company }}</h4></td>
        </tr>

        <!--项目简介-->
        <tr>
          <td colspan="5">
            <!--简介-->
            <h5 class="cv-fix-content-tab4"><i class="bell teal icon"></i>简介: {{ item.brief }}</h5>
            <!--项目技术栈-->
            <h5 class="cv-fix-content-tab4"><i class="bell teal icon"></i>技术栈: <u>{{ item.tech_architecture }}</u></h5>

            <!--技术成果-->
            <div v-for="v in item.content">
              <h5 class="cv-fix-content-tab4"><i class="user teal icon"></i>{{ v.item }}</h5>
              <div class="cv-fix-content-tab8" v-for="vv in v.desc">
                <h5><i class="pointing right purple icon"></i>{{ vv }}</h5>
              </div>
            </div>

            <!--控制项目之间分割-->
            <br>
          </td>
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

