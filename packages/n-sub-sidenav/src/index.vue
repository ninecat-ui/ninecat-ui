<template>
  <div>
    <div
      :class="[
        head ? 'n-sub-sidenav' : 'n-sub-child',
        disabled ? 'disabled' : '',
      ]"
      :disabled="disabled"
    >
      <div
        v-if="head"
        class="n-sub-header"
      >
        <div class="n-sub-head" />
      </div>
      <div class="n-right">
        <div class="n-sub-font">
          {{ name }}
        </div>
        <div
          class="n-sub-footer"
          @click="handleExpand"
        >
          <div class="n-sub-icon" />
        </div>
      </div>
    </div>
    <div v-if="!disabled && expand">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'NSubSidenav',
  props: {
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean
    },
    head: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      expand: false
    };
  },
  methods: {
    handleExpand () {
      this.expand = !this.expand;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
