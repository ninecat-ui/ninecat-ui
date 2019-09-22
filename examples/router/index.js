import VueRouter from 'vue-router'
import Vue from 'vue'
import About from '../pages/about/index.vue'
import nAlert from '../pages/nAlert/index.vue'
import nButton from '../pages/nButton/index.vue'
import nLoader from '../pages/nLoader/index.vue'
import nIcon from '../pages/nIcon/index.vue'
import nMessage from '../pages/nMessage/index.vue'
import nButtonGroup from '../pages/nButtonGroup/index.vue'
import nInput from '../pages/nInput/index.vue'
import nRowNCol from '../pages/nRow-nCol/index.vue'
import nToast from '../pages/nToast/index.vue'
import nTable from '../pages/nTable/index.vue'

Vue.use(VueRouter)

export const commonRoutes = [
  {
    path: '/',
    name: 'about',
    meta: {
      name: '首页'
    },
    component: About
  },
  {
    path: '/ninecat-ui',
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
  },
  {
    path: '/nInput',
    name: 'nInput',
    meta: {
      name: 'nInput'
    },
    component: nInput
  },
  {
    path: '/nRow-nCol',
    name: 'nRow-nCol',
    meta: {
      name: 'nRow-nCol'
    },
    component: nRowNCol
  },
  {
    path: '/nToast',
    name: 'nToast',
    meta: {
      name: 'nToast'
    },
    component: nToast
  },
  {
    path: '/nTable',
    name: 'nTable',
    meta: {
      name: 'nTable'
    },
    component: nTable
  }
]

const routes = componentRoutes.concat(commonRoutes)

export default new VueRouter({
  mode: 'history',
  routes: routes
})
