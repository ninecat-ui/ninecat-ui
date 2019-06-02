import Vue from 'vue'
import App from './examples/index.vue'
import router from './examples/router/index'
import './src/index'
import './assets/scss/reset.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
