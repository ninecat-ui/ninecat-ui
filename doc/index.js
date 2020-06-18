import Vue from 'vue';
import App from './index.vue';
import router from './router/index';
import '../assets/scss/reset.scss';
import { getLang } from './util/lang';
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

getLang();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
