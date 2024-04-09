<template>

  <div v-if="items.length>0">
    <div>
      <!--工作经历-->
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
            <i class="small windows icon teal"></i>{{group}}
          </h3>
        </tr>
        </tbody>

        <tbody v-for="item in items">
        <tr>
          <td><h4>{{ item.duration }}</h4></td>
          <td>
            <h4>
              <i class="internet explorer icon teal"></i>
              <a target="_blank" v-bind:href="item.url">{{ item.company }}</a>
              | <a target="_blank" v-bind:href="item.url">{{ item.corp_status }}</a>
            </h4>
          </td>
          <!--行业信息-->
          <td><h4>{{ item.corp_type }}</h4></td>
          <!--职位信息-->
          <td><h4><i class="user icon teal"></i>{{ item.title }}</h4></td>
          <td><h4><i class="map marker icon teal"></i>{{ item.location }}</h4></td>
        </tr>
        <tr>
          <td colspan="5">
            <!--工作主要职责  purple-->
            <div v-for="t in item.info">
              <h5 class="cv-fix-content-tab4"><i class="chevron circle right purple icon"></i>{{ t }}</h5>
            </div>
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

