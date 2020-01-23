import Vue from 'vue'
import App from './doc/index.vue'
import router from './doc/router/index'
import './src/index'
import './assets/scss/reset.scss'
const lang = window.sessionStorage.getItem('lang')
if (!lang) {
  window.sessionStorage.setItem('lang', 'zh-CN')
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
