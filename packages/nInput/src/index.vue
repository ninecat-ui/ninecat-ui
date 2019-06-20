<template>
  <div>
    <input
      type="text"
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

</style>
