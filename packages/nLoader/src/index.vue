<!--
  loader component
  author:Terence
-->
<template>
  <div
    v-show="show"
    class="loadding"
  >
    <div :style="sizeStyleObject" />
    <span
      :class="[loaddingTextClass,textSizeClass]"
    >
      {{ loaddingText }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'NLoader',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    loaddingText: {
      type: String,
      default: 'Loading...'
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  data: function () {
    return {
      sizeStyleObject: this.getSize(this.size),
      loaddingTextClass: 'loadding-text',
      textSizeClass: this.size ? `${this.size}-text` : 'md-text'
    };
  },
  methods: {
    getSize (size) {
      switch (size) {
        case 'xs':
          return {
            height: '16px',
            width: '16px'
          };
        case 'sm':
          return {
            height: '18px',
            width: '18px'
          };
        case 'md':
          return {
            height: '36px',
            width: '36px'
          };
        case 'lg':
          return {
            height: '64px',
            width: '64px'
          };
        default:
          return {
            height: '36px',
            width: '36px'
          };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>
