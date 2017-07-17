<template>

  <div class="hello">

    <div>
      <h2>-----------简历--------------</h2>
    </div>


    <div>

      <h3>个人简介</h3>
      <!--个人简介-->
      <section class="resume-profile">
        <section class="resume-title">
          <li>姓名: {{cv.profile.name}}</li>
          <li>目标岗位: {{cv.profile.expect.position }}</li>
          <li>期望薪资: {{cv.profile.expect.salary}}</li>
        </section>

        <!--联系方式-->
        <address class="resume-contact">
          <div>
            <li class="resume-tel"> 手机号: <a href="#">{{cv.profile.mobile}}</a></li>
            <li class="resume-email"> 邮箱: <a href="'mailto:'+cv.profile.email">{{cv.profile.email}}</a></li>
            <li>出生日期: {{ cv.profile.birthday }}</li>
          </div>

          <div>
            <li v-for="item in cv.profile.website">
              {{ item.name }} : {{item.url }}
            </li>
          </div>
        </address>

      </section>

      <h3>学历部分</h3>
      <!--学历-->
      <section class="resume-edu">
        <li v-for="item in cv.edu">
          {{ item.school }}
          {{ item.major }}
          {{ item.duration }}
          {{ item.edu_level }}
        </li>
      </section>

    </div>


    <div>
      <h3>工作经历</h3>
      <!--工作经历-->
      <section class="resume-work">
        <div v-for="item in cv.work">
          <span> <a href="">{{ item.company }}</a></span>
          <span> <a href="">{{ item.duration }}</a></span>
          <span> <a href="">{{ item.title }}</a></span>
          <span> <a href="">{{ item.info }}</a></span>
        </div>
      </section>

    </div>


    <h3>项目</h3>
    <!--项目-->
    <section class="resume-project">
      <h4>个人项目</h4>
      <div v-for="item in cv.project.personal">
        <span><a href="#">{{item.name}}</a></span>
        <span>{{item.duration}}</span>
        <li>{{item.brief}}</li>
        <li>{{item.tech_architecture}}</li>

        <div>
          <li v-for="i in item.contribution">
            {{ i.item}} : {{i.desc}}
          </li>
        </div>
        <br>

      </div>

      <h4>企业项目</h4>
      <div v-for="item in cv.project.working">
        <span><a href="#">{{item.name}}</a></span>
        <span>{{item.duration}}</span>
        <li>{{item.brief}}</li>
        <li>{{item.tech_architecture}}</li>

        <div>
          <li v-for="i in item.contribution">
            {{ i.item}} : {{i.desc}}
          </li>
        </div>
        <br>

      </div>
    </section>

    <h3>其他</h3>
    <!--其他-->
    <section class="resume-etc">
      <div v-for="item in cv.etc">
        <li>{{item.title }}  : {{ item.desc }} </li>
      </div>
    </section>


    <!--
图标样式列表:

http://www.semantic-ui.cn/elements/icon.html



-->

    <div>
      <br>

      <!--<icon name="beer"></icon>-->
      <!--<icon name="github"></icon>-->
      <!--<icon name="qq"></icon>-->
      <!--<icon name="facebook"></icon>-->
      <!--<icon name="microphone"></icon>-->
      <!--<br>-->

      <!--<icon name="headphones"></icon>-->
      <!--<icon name="address-book-o"></icon>-->
      <!--<icon name="address-book"></icon>-->
      <!--<icon name="address-card"></icon>-->
      <!--<br>-->

      <!--<icon name="mobile"></icon>-->
      <!--<icon name="mobile-phone"></icon>-->
      <!--<icon name="google"></icon>-->
      <!--<icon name="zhihu"></icon>-->
      <!--<br>-->

      <i class="alarm mute icon red"></i>
      <i class="text telephone icon read"></i>
      <i class="mail icon green"></i>
      <i class="call icon green"></i>
      <i class="star icon green"></i>
      <i class="heart icon green"></i>
      <br>

      <i class="minus icon green"></i>
      <i class="plus icon red"></i>
      <i class="radio icon red"></i>
      <i class="selected radio icon red"></i>
      <i class="angle right icon red"></i>
      <br>

      <i class="circle icon green"></i>
      <i class="xxx icon red"></i>
      <i class="xxx icon green"></i>
      <i class="xxx icon red"></i>
      <i class="xxx icon green"></i>
      <i class="xxx icon red"></i>

    </div>


  </div>


</template>


<style scoped lang="less">
  @import "./Resume.less";
</style>


<script>
  import * as cv from '../assets/cv.json'
  //

  export default {
    name: 'resume',
    components: [],

    data () {
      return {
        cv: cv
      }
    }
  }

</script>
