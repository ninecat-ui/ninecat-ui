import VueRouter from 'vue-router'
import Vue from 'vue'
import About from '../pages/about/index.vue'
import nAlert from '../pages/nAlert/index.vue'
import nButton from '../pages/nButton/index.vue'
import nLoader from '../pages/nLoader/index.vue'
import nIcon from '../pages/nIcon/index.vue'
import nMessage from '../pages/nMessage/index.vue'
import nButtonGroup from '../pages/nButtonGroup/index.vue'

Vue.use(VueRouter)

export const commonRoutes = [
  {
    path: '/',
    name: 'about',
    meta: {
      name: '首页'
    },
    component: About
  }
]

export const componentRoutes = [
  {
    path: '/nAlert',
    name: 'nAlert',
    meta: {
      name: 'nAlert'
    },
    component: nAlert
  },
  {
    path: '/nButton',
    name: 'nButton',
    meta: {
      name: 'nButton'
    },
    component: nButton
  },
  {
    path: '/nLoader',
    name: 'nLoader',
    meta: {
      name: 'nLoader'
    },
    component: nLoader
  },
  {
    path: '/nIcon',
    name: 'nIcon',
    meta: {
      name: 'nIcon'
    },
    component: nIcon
  },
  {
    path: '/nMessage',
    name: 'nMessage',
    meta: {
      name: 'nMessage'
    },
    component: nMessage
  },
  {
    path: '/nButtonGroup',
    name: 'nButtonGroup',
    meta: {
      name: 'nButtonGroup'
    },
    component: nButtonGroup
  }
]

const routes = componentRoutes.concat(commonRoutes)

export default new VueRouter({
  mode: 'history',
  routes: routes
})
