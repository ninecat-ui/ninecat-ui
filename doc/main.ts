
import './../assets/font/iconfont.scss';
import { createApp } from 'vue';
import App from './index.vue';
import ninecat from '../src/index';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/scss/github.scss';
import demoBlock from './components/nDemoBlock/index.vue';
import router from './router/index';

const app = createApp(App);
app
  .use(ninecat)
  .directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  })
  .use(router)
  .component('demo-block', demoBlock)
  .mount('#app');
