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
  .navatar{
    color: #ffffff;
    display: inline-block;
    text-align: center;
  }
  .navatar-lg{
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 30px;
  }
  .navatar-md{
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
  }
  .navatar-sm{
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
  }
  .navatar-xs{
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 10px;
  }
  .navatar-circle{
    border-radius: 50%;
  }
  .navatar-square{
    border-radius:2px;
  }
  .navatar-img{
    display: inline-block;
    vertical-align: middle;
  }
</style>
