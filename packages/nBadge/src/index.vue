<template>
  <div
    class="n-badge"
  >
    <slot />
    <span
      class="n-badge-common"
      :class="[content === '' ? 'n-badge-default' : 'n-badge-content']"
    >
      {{ content }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'NBadge',
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
