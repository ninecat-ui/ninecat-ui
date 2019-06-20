<template>
  <div
    class="n-row"
    :style="[gutterStyle]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NRow',
  provide () {
    return {
      gutter: this.gutter
    }
  },
  props: {
    gutter: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    gutterStyle () {
      return this.gutter ? { marginLeft: -this.gutter + 'px', marginRight: -this.gutter + 'px' } : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.n-row {
  display: flex
}
</style>
