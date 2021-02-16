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
import nHeader from './components/nHeader';
import nNav from './components/nNav';
import nContainer from './components/nContainer';
import config from './doc.config';
import './style/index.scss';
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
