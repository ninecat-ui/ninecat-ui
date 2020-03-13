import Vue from 'vue'
import Router from 'vue-router'
import GetList from '@/components/pages/GetList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GetList',
      component: GetList
    }
  ]
})
