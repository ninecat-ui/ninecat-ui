<template>
  <div>
    <n-input v-model="message" />{{ message }}
    <n-input @change="handleChange" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    handleChange (e) {
      console.log(e)
    }
  }
}
</script>
