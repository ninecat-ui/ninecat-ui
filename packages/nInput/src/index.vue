<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="handleInput"
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
