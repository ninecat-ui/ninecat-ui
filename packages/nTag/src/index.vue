<template>
  <div class="n-tag">
    <div :class="[type]">
      <span>tag</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NTag',
  props: {
    type: {
      type: String,
      default: 'normal'
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
