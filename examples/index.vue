<template>
  <div class="app">
    <common-header />
    <common-main>
      <router-view />
    </common-main>
  </div>
</template>

<script>
import CommonHeader from './layout/CommonHeader'
import CommonMain from './layout/CommonMain'

export default {
  name: 'App',
  components: { CommonHeader, CommonMain }
}
</script>

<style lang="scss" scoped>
.app {
  background-color: #e9e9f1
}
</style>
