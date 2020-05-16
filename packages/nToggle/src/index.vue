<template>
  <div class="n-toggle">
    <label>
      <input
        id="toggle"
        v-model="isChecked"
        type="checkbox"
        style="display: none;"
        :disabled="disabled"
        @change="handleChange"
      >
      <span
        class="n-toggle-body"
        :class="{ disabled }"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'NToggle',
  model: {
    prop: 'checked',
    event: 'updateModel'
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      isChecked: this.$props.checked
    };
  },
  methods: {
    handleChange () {
      this.$emit('updateModel', this.isChecked);
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
