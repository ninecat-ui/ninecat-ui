<template>
  <div class="app">
    <n-header
      :config="config.headerConfig"
    />
    <n-nav
      :config="config.navConfig"
    />
    <n-container>
      <router-view />
    </n-container>
  </div>
</template>

<script>
import Vue from 'vue';
import Ninecat from '../src/index.js';
import nHeader from './components/nHeader';
import nNav from './components/nNav';
import nContainer from './components/nContainer';
import config from './doc.config';
import demoBlock from './components/nDemoBlock';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/github.css';
import './style/index.scss';
Vue.use(Ninecat);
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});

Vue.component('demo-block', demoBlock);

export default {
  name: 'App',
  components: { nHeader, nNav, nContainer },
  data: function () {
    return {
      config: config
    };
  }
};
</script>

<style lang="scss" scoped>
.app {
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased;
  font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
}
</style>
