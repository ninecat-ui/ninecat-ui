<template>
  <div class="app">
    <n-header
      :config="config"
    />
    <!-- <common-header />
    <common-main>
      <router-view />
    </common-main> -->
  </div>
</template>

<script>
import nHeader from '../docs/components/nHeader'

export default {
  name: 'App',
  components: { nHeader },
  data () {
    return {
      config: {
        headerConfig: {
          logo: {
            herf: 'https://avatars3.githubusercontent.com/u/51054939?s=400&u=8d6342ba8bf5106086c26318ee290452501c6dff&v=4',
            image: 'https://avatars3.githubusercontent.com/u/51054939?s=400&u=8d6342ba8bf5106086c26318ee290452501c6dff&v=4',
            title: 'Ninecat'
          },
          lang: 'zh-CN',
          versions: ['1.0.0', '1.1.0'],
          githubLink: 'https://github.com/ninecat-ui/ninecat-ui',
          simulators: []
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  background-color: #ffffff
}
</style>
