import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      meta: { title: '首页' },
      component: Home
    },
    {
      path: '/smzdm',
      meta: { title: '' },
      component: resolve => require(['@/views/smzdm.vue'], resolve)
    }
  ]
})
