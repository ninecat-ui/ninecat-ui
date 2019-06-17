<template>
  <div>
    <n-button @click="showToast">
      toast
    </n-button>
  </div>
</template>

<script>
export default {
  methods: {
    showToast () {
      this.$toast('1111')
    }
  }
}
</script>
