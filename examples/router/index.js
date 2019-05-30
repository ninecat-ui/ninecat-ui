import VueRouter from 'vue-router'
import Vue from 'vue'
import About from '../pages/about/index.vue'
import nButton from '../pages/nButton/index.vue'
import nLoader from '../pages/nLoader/index.vue'
import nIcon from '../pages/nIcon/index.vue'
import nMessage from '../pages/nMessage/index.vue'

Vue.use(VueRouter)

export const commonRoutes = [
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

export const componentRoutes = [
  {
    path: '/nButton',
    name: 'nButton',
    component: nButton
  },
  {
    path: '/nLoader',
    name: 'nLoader',
    component: nLoader
  },
  {
    path: '/nIcon',
    name: 'nIcon',
    component: nIcon
  },
  {
    path: '/nMessage',
    name: 'nMessage',
    component: nMessage
  }
]

const routes = componentRoutes.concat(commonRoutes)

export default new VueRouter({
  mode: 'hash',
  routes: routes
})
