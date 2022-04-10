
import { createApp } from 'vue';
import App from './App.vue';
import ninecat from '../../src/main';
import hljs from 'highlight.js';
import 'highlight.js/scss/github.scss';
import demoBlock from './components/nDemoBlock/index.vue';
import router from './router/index';

const app = createApp(App);
app
  .use(ninecat)
  .directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block:any) => {
      hljs.highlightBlock(block);
    });
  })
  .use(router)
  .component('demo-block', demoBlock)
  .mount('#app');
