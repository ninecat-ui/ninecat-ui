<template>
  <div>
    <h1>
      Ninecat-ui
    </h1>
    <h1>
      <img
        class="logo"
        src="https://avatars3.githubusercontent.com/u/51054939?s=400&u=8d6342ba8bf5106086c26318ee290452501c6dff&v=4"
      >
      <img src="https://travis-ci.com/ninecat-ui/ninecat-ui.svg?branch=master">
      <img src="https://codecov.io/gh/ninecat-ui/ninecat-ui/branch/master/graph/badge.svg">
      <img src="https://img.shields.io/badge/license-MIT-000000.svg">
      <img src="https://img.shields.io/badge/webpack-4-blue.svg">
      <img src="https://img.shields.io/badge/vue-2.6.10-green.svg">
      <img src="https://img.shields.io/badge/npm-6.4.1-lightblue.svg">
    </h1>
    <vue-markdown>
      {{ about }}
    </vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import about from '../../markdown/about.md'
export default {
  name: 'About',
  components: {
    VueMarkdown
  },
  data () {
    return {
      about: about
    }
  }
}
</script>
<style lang="scss">
.logo{
  display: inline-block
}
</style>
