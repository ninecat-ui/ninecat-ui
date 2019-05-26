<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$router.push({ name: 'about' })
  }
}
</script>
