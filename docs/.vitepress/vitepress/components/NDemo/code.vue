<template>
  <div class="example-source-wrapper">
    <div class="example-source language-vue" v-html="decodeURIComponent(source)" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  source: {
    type: String,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.language-vue {
  margin: 0;
  border-radius: 0;
}
</style>
