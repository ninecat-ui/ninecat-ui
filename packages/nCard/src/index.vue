<template>
  <div class="card">
    <img
      class="card-img"
      :src="src"
    >
    <span class="card-title">{{ title }}</span>
    <p class="card-message">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'NCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
