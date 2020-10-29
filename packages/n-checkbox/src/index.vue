<template>
  <div class="n-checkbox">
    <input
      id="checkbox"
      type="checkbox"
    >
    <label for="checkbox" />
  </div>
</template>
<script>
export default {
  name: 'NCheckbox',
  props: {
    autoFocus: {
      type: [Boolean],
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
