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
.n-col {
  width: 50%;
  padding: 16px 0;
  $class-prefix: n-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
