<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NToast',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.$el.remove()
      this.$destroy()
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>

</style>
