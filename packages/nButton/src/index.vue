<template>
  <button
    class="nbutton"
    :class="[
      type ? type : '',
      disabled ? 'nbutton-disabled' : '',
      size ? size : ''
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span
      v-if="icon || loading"
      class="nbutton-icon"
    >
      <n-icon
        v-if="loading"
        class="loading"
        name="icon-wind-loading"
      />
      <n-icon
        v-if="icon && !loading"
        :name="icon"
      />
    </span>
    <span class="nbutton-content">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'NButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return typeof value === 'string';
      }
    },
    icon: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    },
    size: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
