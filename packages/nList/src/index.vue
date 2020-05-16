<template>
  <ul
    class="n-list"
    :class="[borderedClass]"
  >
    <li
      v-for="(item,index) in data"
      :key="index"
      :class="[sizeClass,borderedClass,hoverClass]"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'NList',

  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      }
    },
    size: {
      type: String,
      default: 'md'
    },
    bordered: {
      type: [String, Boolean],
      default: function () {
        return false;
      }
    },
    hover: {
      type: [String, Boolean],
      default: function () {
        return false;
      }
    }
  },

  computed: {
    sizeClass () {
      const { size } = this;
      return size;
    },
    borderedClass () {
      const { bordered } = this;
      if (bordered || bordered === 'true') {
        return 'bordered';
      } else {
        return '';
      }
    },
    hoverClass () {
      const { hover } = this;
      if (hover || hover === 'true') {
        return 'hover';
      } else {
        return '';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
