<template>
  <div class="n-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NButtonGroup',
  mounted () {
    for (let node of this.$el.children) {
      const name = node.nodeName.toLowerCase();
      if (name !== 'button') {
        console.warn(`n-button-group 的子元素应该全是 n-button，但是你写的是 ${name}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
