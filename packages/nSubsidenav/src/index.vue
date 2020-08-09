<template>
  <div>
    <div
      :class="[
      head ? 'n-sub-sidenav' : 'n-sub-child',
      disabled ? 'disabled' : '',
    ]"
      :disabled="disabled"
    >
      <div v-if="head" class="n-sub-header">
        <div class="n-sub-head"></div>
      </div>
      <div class="n-right">
        <div class="n-sub-font">{{name}}</div>
        <div class="n-sub-footer" @click="handleChange">
          <div class="n-sub-icon"></div>
        </div>
      </div>
    </div>
    <div v-if="!disabled && change">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  name: "NSubSidenav",
  props: {
    name: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    head: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      change: false
    };
  },
  methods: {
    handleChange() {
      this.change = !this.change;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
