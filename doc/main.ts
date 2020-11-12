import { createApp } from 'vue';
import App from './index.vue';
import ninecat from '../src/index';

const app = createApp(App);
app
  .use(ninecat)
  .mount('#app');
