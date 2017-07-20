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

    <!--简历内容-->
    <div class="ui  segment" id="cv-content">
      <!--个人信息-->
      <div class="ui grid">
        <div class="three column row">
          <!--姓名-->
          <div class="column"><h1 class="ui green header left aligned"> {{cv.profile.name}} </h1></div>
          <div class="column"></div>
          <!--岗位/薪资-->
          <div class="column"><h3>期望薪资: {{cv.profile.expect.salary}} </h3></div>
        </div>
      </div>

      <!--个人信息-->
      <div class="ui vertical green segment">
        <div class="ui grid">
          <!--联系方式-->
          <div class="four column row cv-fix-height">
            <div class="column left aligned">
              <h4>
                <i class="call icon green"></i>
                {{cv.profile.mobile}}
              </h4>
            </div>
            <div class="column left aligned">
              <h4>
                <i class="mail icon green"></i>
                <a class="header" href="#">{{cv.profile.email}}</a>
              </h4>
            </div>
            <div class="column left aligned">
              <h4>
                <i class="male icon green"></i>{{ cv.profile.birthday }}
                <i class="marker icon green"></i>{{ cv.profile.address }}
              </h4>
            </div>
            <div class="column left aligned">
              <h4>
                <i class="configure icon green"></i>
                <!--岗位/薪资-->
                目标岗位:{{ cv.profile.expect.position }}
              </h4>
            </div>

          </div>

          <!--website-->
          <div class="four column row cv-fix-height">
            <div class="column left aligned">
              <h4>
                <i class="world icon green"></i>
                <a target="_blank" v-bind:href="'http://' + cv.profile.website.blog">
                  {{ cv.profile.website.blog }}
                </a>
              </h4>
            </div>
            <div class="column left aligned">
              <h4>
                <i class="github alternate icon green"></i>
                <a target="_blank" v-bind:href="'https://'+ cv.profile.website.github">
                  {{ cv.profile.website.github }}
                </a>
              </h4>
            </div>
            <div class="column left aligned">
              <h4>
                <i class="rocket icon green"></i>
                <a target="_blank" v-bind:href="'https://'+ cv.profile.website.zhihu">
                  {{ cv.profile.website.zhihu }}
                </a>
              </h4>
            </div>
            <div class="column left aligned">
              <h4>
                <i class="book icon green"></i>
                <a target="_blank" v-bind:href="'https://'+ cv.profile.website.douban">
                  {{ cv.profile.website.douban }}
                </a>
              </h4>
            </div>

          </div>
        </div>
      </div>

      <!--学历-->
      <div class="ui vertical green segment">
        <h3 class="ui blue header left aligned ">
          <i class="student icon green"></i>学历
        </h3>
        <div class="ui grid">
          <div class="five column row cv-fix-height" v-for="item in cv.edu">
            <div class="column"><h4>{{ item.school }}</h4></div>
            <div class="column"><h4>{{ item.major }}</h4></div>
            <div class="column"><h4>{{ item.duration }}</h4></div>
            <div class="column"><h4>{{ item.edu_level }}</h4></div>
            <div class="column"><h4>{{ item.cet_level }}</h4></div>
          </div>
        </div>
      </div>

      <!--工作经历-->
      <div class="ui vertical green segment">
        <h3 class="ui blue header left aligned">
          <i class="sitemap icon green"></i>工作经历
        </h3>

        <!--工作信息-->
        <div class="ui grid">

          <div class="four column row cv-fix-height" v-for="item in cv.work">
            <!--履职时间-->
            <div class="four wide column left aligned">
              <h4>{{ item.duration }}</h4>
            </div>
            <!--岗位-->
            <div class="four wide column left aligned">
              <h4>{{ item.title }}</h4>
            </div>
            <!--公司名称-->
            <div class="four wide column left aligned">
              <h4>
                <i class="space shuttle icon green"></i>
                <a target="_blank" v-bind:href="item.url">{{ item.company }}</a>
                | <a target="_blank" v-bind:href="item.url">{{ item.corp_status }}</a>
              </h4>
            </div>
            <!--公司所在地-->
            <div class="four wide column right aligned">
              <h4>{{ item.location }}</h4>
            </div>

            <!--岗位职责-->
            <div class="sixteen wide column left aligned" v-for="v in item.info">
              <h5 class="cv-fix-content-tab4"><i class="tag green icon"></i>{{ v }}</h5>
            </div>

          </div>
        </div>
      </div>

      <!--项目-->
      <div class="ui vertical green segment">
        <h3 class="ui blue header left aligned">
          <i class="cubes icon green"></i>项目
        </h3>

        <!--企业项目-->
        <div class="ui orange segment">
          <h4 class="ui orange header left aligned">
            企业项目
          </h4>

          <div class="ui grid">

            <div class="four column row cv-fix-height" v-for="item in cv.project.working">
              <!--项目名称-->
              <div class="four wide column left aligned">
                <h4><i class="cube icon green"></i>{{ item.name }}</h4>
              </div>
              <!--项目开发时间-->
              <div class="four wide column left aligned">
                <h4>{{ item.duration }}</h4>
              </div>

              <!--职责-->
              <div class="four wide column right aligned">
                <h4>{{ item.title }}</h4>
              </div>
              <!--公司-->
              <div class="four wide column right aligned">
                <h4>{{ item.company }}</h4>
              </div>

              <!-------------------------------------- 项目细节部分 ---------------------------------------->
              <!--项目介绍-->
              <div class="sixteen wide column left aligned">
                <h5 class="cv-fix-content-tab4"><i class="tag green icon"></i>项目简介: {{ item.brief }}</h5>
              </div>

              <!--技术栈-->
              <div class="sixteen wide column left aligned">
                <h5 class="cv-fix-content-tab4"><i class="tag green icon"></i>技术栈: {{ item.tech_architecture }}</h5>
              </div>

              <!--成果-->
              <div class="sixteen wide column left aligned" v-for="v in item.contribution">
                <h5 class="cv-fix-content-tab4"><i class="tag green icon"></i>{{ v.item }}</h5>
                <!--具体成果-->
                <div class="sixteen wide column left aligned" v-for="vv in v.desc">
                  <div class="cv-fix-content-tab8"><i class="pointing right red icon"></i>{{ vv }}</div>
                </div>
              </div>

              <!-------------------------------------- 项目细节部分 ---------------------------------------->

            </div>
          </div>

        </div>

        <!--个人项目-->
        <div class="ui orange segment">
          <h4 class="ui orange header left aligned">个人项目</h4>

          <div class="ui grid">

            <div class="four column row cv-fix-height" v-for="item in cv.project.personal">
              <!--项目名称-->
              <div class="four wide column left aligned">
                <h4><i class="cube icon green"></i>{{ item.name }}</h4>
              </div>
              <!--项目开发时间-->
              <div class="four wide column left aligned">
                <h4>{{ item.duration }}</h4>
              </div>

              <!--项目地址-->
              <div class="four wide column right aligned">
                <h4>{{ item.url }}</h4>
              </div>

              <!--职责-->
              <div class="four wide column right aligned">
                <h4>{{ item.title }}</h4>
              </div>

              <!--项目介绍-->
              <div class="sixteen wide column left aligned">
                <h5><i class="tag green icon"></i>项目简介: {{ item.brief }}</h5>
              </div>

              <!--技术栈-->
              <div class="sixteen wide column left aligned">
                <h5><i class="tag green icon"></i>技术栈: {{ item.tech_architecture }}</h5>
              </div>

              <!--成果-->
              <div class="sixteen wide column left aligned" v-for="v in item.contribution">
                <h5><i class="tag green icon"></i>{{ v.item }}</h5>
                <!--具体成果-->
                <div class="sixteen wide column left aligned" v-for="vv in v.desc">
                  <div class="cv-fix-content-tab8"><i class="pointing right red icon"></i>{{ vv }}</div>
                </div>

              </div>


            </div>
          </div>

        </div>

      </div>

      <!--其他-->
      <div class="ui vertical green segment">
        <h3 class="ui blue header left aligned">
          <i class="dashboard icon green"></i>其他
        </h3>

        <div class="ui grid">
          <div class="four column row cv-fix-height" v-for="item in cv.etc">
            <div class="sixteen wide column left aligned">
              <h5><i class="tag green icon"></i>{{item.title }}</h5>
            </div>

            <!--成果-->
            <div class="sixteen wide column left aligned" v-for="v in item.desc">
              <h5 class="cv-fix-content-tab8"><i class="pointing right red icon"></i>{{ v }}</h5>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>


<style scoped lang="less">
  @import "./Resume.less";
</style>


<script>
  import * as cv from '../assets/cv.json'    // cv-2017.json
  // import * as cv from '../assets/cv-2017.json'    // cv-2017.json

  export default {
    name: 'resume',
    components: [],

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
