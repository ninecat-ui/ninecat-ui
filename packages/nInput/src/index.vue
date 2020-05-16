<template>
  <div>
    <input
      :class="[
        'n-input',
        inputSize ? 'n-input-' + inputSize : '',
        {
          'n-input-disabled':disabled,
        }
      ]"
      type="text"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    >
  </div>
</template>

<script>
export default {
  name: 'NInput',
  model: {
    event: 'input',
    value: 'value'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      inputSize: this.size
    };
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
