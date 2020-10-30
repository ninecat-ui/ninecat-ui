<template>
  <div class="n-checkbox">
    <input
      :id="id"
      type="checkbox"
    >
    <label :for="id" />
  </div>
</template>
<script>
import { guid } from '@/utils/util';
export default {
  name: 'NCheckbox',
  props: {
    autoFocus: {
      type: [Boolean],
      default: false
    }
  },
  data () {
    return {
      id: guid()
    };
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
