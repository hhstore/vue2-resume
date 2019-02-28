import Vue from 'vue'
import Router from 'vue-router'

// ******************************************
//             组件列表:
// ******************************************
import Resume from '@/components/Resume'

//
Vue.use(Router)

// ******************************************
//             路由匹配:
// 注意:
//    - 与 <router-view> 标签关联, 黑盒部分
//    - 组件的路由搜索和匹配, 都是在这里设置的
//
// ******************************************
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resume',   // 简历组件
      component: Resume
    }
  ]
})
