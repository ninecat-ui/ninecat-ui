import { createApp, version } from 'vue';
import App from './index.vue';
import router from './router/index';
import '../assets/scss/reset.scss';
import { getLang } from './util/lang';
import Ninecat from '../src/index.js';
import demoBlock from './components/nDemoBlock';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/github.css';
getLang();

// eslint-disable-next-line no-console
console.log('Vue version: ', version);
const app = createApp(App);
app.component('demo-block', demoBlock);
app.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
app.use(router);
app.use(Ninecat);
app.mount('#app');
