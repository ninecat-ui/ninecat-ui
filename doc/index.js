import Vue from 'vue'
import App from './index.vue'
import router from './router/index'
import '../assets/scss/reset.scss'
const lang = window.sessionStorage.getItem('lang')
if (!lang) {
  window.sessionStorage.setItem('lang', 'zh-CN')
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
