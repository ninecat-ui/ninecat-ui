<template>
  <div class="n-checkbox">
    <input
      :id="id"
      v-model="checkeval"
      type="checkbox"
    >
    <label :for="id" />
    <div class="slot-text">
      <slot />
    </div>
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
    },
    checked: {
      type: [Boolean],
      default: false
    },
    defaultChecked: {
      type: [Boolean],
      default: false
    }
  },
  data () {
    return {
      id: guid()
    };
  },
  computed: {
    checkeval: function () {
      if (this.checked) {
        return this.checked;
      }
      return this.defaultChecked;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
