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
        <h1 class="ui teal header"> {{cv.profile.name}} </h1>
      </div>
      <div class="four wide column right aligned">
        <h3>期望薪资: {{cv.profile.expect.salary}}</h3>
      </div>
    </div>

    <!--联系方式-->
    <table class="ui table teal cv-table">
      <thead><tr></tr></thead>

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
            <i class="male icon teal"></i>{{ cv.profile.birthday }}
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
            {{cv.profile.mobile}}
          </h4>
        </td>
        <td>
          <h4>
            <i class="mail icon teal"></i>
            <a class="header" href="#">{{cv.profile.email}}</a>
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
      <thead><tr></tr></thead>
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
    <table class="ui table teal cv-tb-job">
      <thead><tr><td></td></tr></thead>
      <!--单独的标题项-->
      <tbody>
      <tr>
        <h3 class="ui blue header">
          <i class="small windows icon teal"></i>工作经历
        </h3>
      </tr>
      </tbody>

      <tbody v-for="item in cv.work">
      <tr>
        <td><h4>{{ item.duration }}</h4></td>
        <td>
          <h4>
            <i class="internet explorer icon teal"></i>
            <a target="_blank" v-bind:href="item.url">{{ item.company }}</a>
            | <a target="_blank" v-bind:href="item.url">{{ item.corp_status }}</a>
          </h4>
        </td>
        <td><h4>{{ item.corp_type }}</h4></td>
        <td><h4>{{ item.title }}</h4></td>
        <td><h4>{{ item.location }}</h4></td>
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

    <!--企业开发项目列表-->
    <table class="ui table teal cv-tb-job">
      <thead>
        <tr><td></td></tr>
      </thead>
      <!--单独的标题项-->
      <tbody>
        <tr>
          <h3 class="ui blue header">
            <i class="small cubes icon teal"></i>企业项目
          </h3>
        </tr>
      </tbody>

      <tbody v-for="item in cv.project.working">
        <tr>
          <!--项目名称-->
          <td><h4><i class="cube icon teal"></i><a target="_blank" v-bind:href="item.url">{{ item.name }}</a></h4></td>
          <!--项目官网-->
          <td><h4><a target="_blank" v-bind:href="item.url"><i class="internet explorer icon teal"></i>项目官网</a></h4></td>
          <!--项目周期-->
          <td class="right aligned"><h4>{{ item.duration }}</h4></td>
          <!--担任职位-->
          <td class="right aligned"><h4>{{ item.title }}</h4></td>
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


    <!--业余兼职项目列表-->
    <table class="ui table teal cv-tb-job">
      <thead><tr><td></td></tr></thead>
      <!--单独的标题项-->
      <tbody>
      <tr>
        <h3 class="ui blue header">
          <i class="small cubes icon teal"></i>兼职项目
        </h3>
      </tr>
      </tbody>

      <tbody v-for="item in cv.project.part_time">
      <tr>
        <!--项目名称-->
        <td><h4><i class="cube icon teal"></i><a target="_blank" v-bind:href="item.url">{{ item.name }}</a></h4></td>
        <!--项目官网-->
        <td><h4><a target="_blank" v-bind:href="item.url"><i class="internet explorer icon teal"></i>项目官网</a></h4></td>
        <!--项目周期-->
        <td><h4>{{ item.duration }}</h4></td>
        <!--担任职位-->
        <td class="right aligned"><h4>{{ item.title }}</h4></td>
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


    <!--开源项目列表-->
    <table  class="ui table teal cv-tb-job">
      <thead><tr><td></td></tr></thead>
      <!--单独的标题项-->
      <tbody>
      <tr>
        <h3 class="ui blue header">
          <i class="small cubes icon teal"></i>个人项目
        </h3>
      </tr>
      </tbody>

      <tbody>
        <tr v-for="item in cv.project.personal">
          <!--项目访问地址-->
          <td>
            <h4><i class="github icon teal"></i><a target="_blank" v-bind:href="'https://'+item.url">{{ item.url
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


    <!--其他说明-->
    <table  class="ui table teal cv-tb-job">
      <thead><tr><td></td></tr></thead>
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
            <h4><i class="user teal icon"></i>{{item.title }}:</h4>
            <div v-for="v in item.desc">
              <!--详情-->
              <h5 class="cv-fix-content-tab8"><i class="pointing right purple icon"></i>{{ v }}</h5>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>


<style scoped lang="less">
  @import "./Resume.less";
</style>


<script>
  // import * as cv from '../assets/cv.json'    // cv-2017.json
  import * as cv from '../assets/cv.json'    // cv-2017.json

  export default {
    name: 'resume',
    components: {},

    data () {
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
