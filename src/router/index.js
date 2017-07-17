import Vue from 'vue'
import Router from 'vue-router'

//
import Hello from '@/components/Hello'
import Resume from '@/components/Resume'

//
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Resume',
      component: Resume
    }
  ]
})
