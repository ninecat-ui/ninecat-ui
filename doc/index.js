import Vue from 'vue'
import App from './index.vue'
import router from './router/index'
import '../assets/scss/reset.scss'
import { getLang } from './util/lang'

getLang()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
