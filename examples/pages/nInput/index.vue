<template>
  <div><n-input v-model="message" />{{ message }}</div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  }
}
</script>
