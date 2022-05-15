<template>
  <n-check-tag checked>Checked</n-check-tag>
  <n-check-tag round checked>Checked</n-check-tag>
  <n-check-tag :checked="checked" @change="onChange">Toggle me</n-check-tag>
  <n-check-tag round >Toggle me</n-check-tag>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(false)

const onChange = (status: boolean) => {
  checked.value = status
}
</script>