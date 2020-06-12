<template>
  <div
    :class="avatarClass"
    :style="[sizeStyle,bgStyle]"
  >
    <img
      v-if="src"
      :class="avatarClass"
      class="navatar-img"
      :src="src"
      :alt="alt"
    >
    <slot v-else />
  </div>
</template>

<script>
export default {
  name: 'NAvatar',

  props: {
    size: {
      type: [String, Number],
      default: 'md',
      validator (val) {
        if (typeof val === 'string') {
          return ['lg', 'md', 'sm', 'xs'].includes(val);
        }
        return typeof val === 'number';
      }
    },
    shape: {
      type: String,
      default: 'square'
    },
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },

  computed: {
    avatarClass () {
      const { size, icon, shape } = this;
      let classList = ['navatar'];
      if (size && typeof size === 'string') {
        classList.push(`navatar-${size}`);
      }
      if (icon) {
        classList.push('navatar-icon');
      }
      if (shape) {
        classList.push(`navatar-${shape}`);
      }
      return classList.join(' ');
    },
    sizeStyle () {
      const { size } = this;
      return typeof size === 'number' ? {
        height: `${size}px`,
        width: `${size}px`,
        lineHeight: `${size}px`
      } : {};
    },
    bgStyle () {
      const { src } = this;
      if (src) {
        return {};
      } else {
        return {
          background: '#CCCCCC'
        };
      }
    }
  }

};
</script>

<style lang="scss" scoped>
 @import './index.scss'
</style>
