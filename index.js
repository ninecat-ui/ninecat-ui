import Vue from 'vue'
import App from './doc/index.vue'
import router from './doc/router/index'
import './src/index'
import './assets/scss/reset.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
