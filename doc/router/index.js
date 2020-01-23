import VueRouter from 'vue-router'
import Vue from 'vue'
import hljs from 'highlight.js'

import docConfig from '../doc.config'

function loadDoc (lang, path) {
  return resolve => require.ensure([], () => resolve(require(`../markdown${path}/${lang}/index.md`)))
}

Vue.use(VueRouter)

export const commonRoutes = [
  {
    path: '/',
    name: 'about',
    meta: {
      name: '首页'
    },
    component: loadDoc('zh-CN', '/about')
  },
  {
    path: '/ninecat-ui',
    name: 'about',
    meta: {
      name: '首页'
    },
    component: loadDoc('zh-CN', '/about')
  }
]

const componentRoutes = []

const { navConfig } = docConfig

navConfig.forEach(navItem => {
  navItem.groups.forEach(groupItem => {
    groupItem.list.forEach(item => {
      if (item.path !== '/') {
        componentRoutes.push({
          path: item.path,
          name: item.path.slice(1),
          meta: {
            name: item.path.slice(1)
          },
          component: loadDoc('zh-CN', item.path)
        })
      }
    })
  })
})

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
