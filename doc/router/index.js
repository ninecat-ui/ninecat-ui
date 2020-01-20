import VueRouter from 'vue-router'
import Vue from 'vue'
import hljs from 'highlight.js'

import About from '../markdown/about/index.md'
import nAlert from '../markdown/nAlert/index.md'
import nButton from '../markdown/nButton/index.md'
import nLoader from '../markdown/nLoader/index.md'
import nMessage from '../markdown/nMessage/index.md'
import nInput from '../markdown/nInput/index.md'
import nTable from '../markdown/nTable/index.md'
import nPagination from '../markdown/nPagination/index.md'
// import nIcon from '../pages/nIcon/index.vue'
// import nButtonGroup from '../pages/nButtonGroup/index.vue'
import nGrid from '../markdown/nGrid/index.md'
// import nToast from '../pages/nToast/index.vue'
import nModal from '../markdown/nModal/index.md'
import nProgress from '../markdown/nProgress/index.md'
import nDrawer from '../markdown/nDrawer/index.md'

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
    path: '/nGrid',
    name: 'nGrid',
    meta: {
      name: 'nGrid'
    },
    component: nGrid
  },
  {
    path: '/nAlert',
    name: 'nAlert',
    meta: {
      name: 'nAlert'
    },
    component: nAlert
  },
  {
    path: `/nButton`,
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
    path: '/nMessage',
    name: 'nMessage',
    meta: {
      name: 'nMessage'
    },
    component: nMessage
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
    path: '/nTable',
    name: 'nTable',
    meta: {
      name: 'nTable'
    },
    component: nTable
  },
  {
    path: '/nPagination',
    name: 'nPagination',
    meta: {
      name: 'nPagination'
    },
    component: nPagination
  },
  {
    path: '/nModal',
    name: 'nModal',
    meta: {
      name: 'nModal'
    },
    component: nModal
  },
  {
    path: '/nDrawer',
    name: 'nDrawer',
    meta: {
      name: 'nDrawer'
    },
    component: nDrawer
  },
  {
    path: '/nProgress',
    name: 'nProgress',
    meta: {
      name: 'nProgress'
    },
    component: nProgress
  }
]

const routes = componentRoutes.concat(commonRoutes)

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

export default router
