<template>
  <div
    class="n-col"
    :class="[
      span ? `n-col-${span}`: '',
      offset ? `offset-${offset}`: '',
    ]"
    :style="[gutterStyle]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NCol',
  props: {
    span: {
      type: [Number, String],
      default: ''
    },
    offset: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    gutterStyle () {
      return { marginLeft: this.gutter + 'px', marginRight: this.gutter + 'px' };
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
