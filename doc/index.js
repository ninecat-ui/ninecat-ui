import Vue from 'vue';
import App from './index.vue';
import router from './router/index';
import '../assets/scss/reset.scss';
import { getLang } from './util/lang';
import VueCompositionApi from '@vue/composition-api';
import Ninecat from '../src/index.js';
Vue.use(VueCompositionApi);
Vue.use(Ninecat);

getLang();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
