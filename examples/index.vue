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
import nHeader from '../docs/components/nHeader'
import nNav from '../docs/components/nNav'
import nContainer from '../docs/components/nContainer'
import config from '../docs/doc.config'

export default {
  name: 'App',
  components: { nHeader, nNav, nContainer },
  data () {
    return {
      config: config
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased;
  font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
}
</style>
