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
      this.$toast('我是Toast')
    }
  }
}
</script>
