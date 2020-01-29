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
      @input="handleInput"
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
      default: 'Please input'
    }
  },
  data: function () {
    return {
      inputSize: this.size
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .n-input,
  .n-input-md{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color:  #575757;
    line-height: 20px;
    padding: 8px 12px;
    width: 300px;
    height: 20px;
    background: #FFFFFF;
    border: 1px solid #E5E5EA;
    border-radius: 6px;
    &:hover{
      cursor:pointer;
      border: 1px solid #34C3FF;
    }
    &:focus {
      border: 1px solid #34C3FF;
      outline: none;
    }
  }
  .n-input-lg{
    font-size: 16px;
    padding: 10px 12px;
  }
  .n-input-sm{
    padding: 5px 12px;
  }
  .n-input-xs{
    font-size: 12px;
    padding: 2px 12px;
  }
  .n-input-disabled{
    background: #F7F7FA;
    border: 1px solid #E5E5EA;
    border-radius: 6px;
    &:hover{
      border: 1px solid #E5E5EA;
      cursor: not-allowed;
    }
    &:focus {
      border: 1px solid #E5E5EA;
      outline: none;
      cursor: not-allowed;
    }
  }
  .n-input::placeholder{
    color: #8E8E93;
  }
</style>
