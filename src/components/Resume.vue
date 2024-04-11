<template>
  <!--简历-->
  <div class="cv-main">

    <!--打印按钮-->
    <div id="cv-export">
      <h3>

        <button v-on:click="exportPDF" class="ui orange button">
          <i class="print icon"></i>打印
        </button>
      </h3>
    </div>

    <!--姓名-->
    <div class="ui grid left aligned">
      <div class="twelve wide column">
        <h1 class="ui teal header"> {{ cv.profile.name }} </h1>
      </div>
      <div class="four wide column right aligned">
<!--        <h3>期望薪资: {{ cv.profile.expect.salary }}</h3>-->
      </div>
    </div>

    <!--联系方式-->
    <table class="ui table teal cv-table">
      <thead>
      <tr></tr>
      </thead>

      <!--<tbody>-->
      <!--<tr>-->
      <!--<td colspan="3"><h1 class="ui teal header"> {{cv.profile.name}} </h1></td>-->
      <!--<td class="right aligned"><h3>期望薪资: {{cv.profile.expect.salary}}</h3></td>-->
      <!--</tr>-->
      <!--</tbody>-->

      <tbody>
      <tr>
        <td>
          <h5>
            <!--            <i class="male icon teal"></i>{{ cv.profile.birthday }}-->
            <i class="marker icon teal"></i>{{ cv.profile.address }}
          </h5>
        </td>
        <td>
          <h5>
            <i class="configure icon teal"></i>
            <!--岗位/薪资-->
            岗位:{{ cv.profile.expect.position }}
          </h5>
        </td>
        <td>
          <h5>
            <i class="github alternate icon teal"></i>
            <a target="_blank" v-bind:href="'https://'+ cv.profile.website.github">
              {{ cv.profile.website.github }}
            </a>
          </h5>
        </td>
        <td>
          <h5>
            <i class="github icon teal"></i>
            <a target="_blank" v-bind:href="'http://' + cv.profile.website.blog">
              {{ cv.profile.website.blog }}
            </a>
          </h5>
        </td>
      </tr>

      <!--第二行-->
      <tr>
        <td>
          <h4>
            <i class="call icon teal"></i>
            {{ cv.profile.mobile }}
          </h4>
        </td>
        <td>
          <h4>
            <i class="mail icon teal"></i>
            <a class="header" href="#">{{ cv.profile.email }}</a>
          </h4>
        </td>
        <td>
          <h4>
            <i class="weibo icon teal"></i>
            <a target="_blank" v-bind:href="'https://'+ cv.profile.website.zhihu">
              {{ cv.profile.website.zhihu }}
            </a>
          </h4>
        </td>
        <td>
          <h4>
            <i class="wechat icon teal"></i>
            <a target="_blank" v-bind:href="'https://'+ cv.profile.website.douban">
              {{ cv.profile.website.douban }}
            </a>
          </h4>
        </td>
      </tr>
      </tbody>

    </table>

    <!--学历信息-->
    <table class="ui table teal cv-table ">
      <thead>
      <tr></tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <h3 class="ui blue header left aligned ">
            <i class="small student icon teal"></i>学历
          </h3>
        </td>
      </tr>
      <!--学历信息-->
      <tr v-for="item in cv.edu">
        <td><h4>{{ item.school }}</h4></td>
        <td><h4>{{ item.major }}</h4></td>
        <td><h4>{{ item.duration }}</h4></td>
        <td><h4>{{ item.edu_level }}</h4></td>
        <td><h4>{{ item.cet_level }}</h4></td>
      </tr>
      </tbody>
    </table>

    <!--工作经历-->
    <w-job :items="cv.work" group="工作经历"></w-job>


    <!--项目列表-->
    <div v-for="v in cv.projects" :key="v">
      <div v-if="v.type==='open'">

        <!--开源项目列表-->
        <w-project-open :items="v.data" :group="v.group"></w-project-open>
      </div>
      <div v-else>
        <!--        项目列表 -->
        <w-project :items="v.data" :group="v.group"></w-project>
      </div>
    </div>


    <!--其他说明-->
    <div v-if="cv.etc.length >0">
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
            <i class="small dashboard icon teal"></i>其他
          </h3>
        </tr>
        </tbody>

        <tbody>
        <tr v-for="item in cv.etc">
          <td>
            <!--分类-->
            <h4><i class="user teal icon"></i>{{ item.title }}:</h4>
            <div v-for="v in item.desc">
              <!--详情-->
              <h5 class="cv-fix-content-tab8"><i class="pointing right purple icon"></i>{{ v }}</h5>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>


  </div>
</template>


<style scoped lang="less">
@import "./Resume.less";
</style>


<script>
// import * as cv from '../assets/cv.json'    // cv-2017.json
import * as cv from '../assets/cv.json'
import WProject from "./WProject.vue"
import WProjectOpen from "./WProjectOpen.vue";
import WJob from "./WJob.vue";    // cv-2017.json

export default {
  name: 'resume',
  components: {WJob, WProjectOpen, WProject},

  data() {
    return {
      cv: cv
    }
  },

  methods: {
    exportPDF: function () {
      // 隐藏打印按钮
      document.getElementById('cv-export').style.display = 'none'
      window.print()
      // 恢复打印按钮
      document.getElementById('cv-export').style.display = ''
    }
  }
}

</script>
