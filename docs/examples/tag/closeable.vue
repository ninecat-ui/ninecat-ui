<template>
  <n-tag closable @close="log">nomal</n-tag>
  <n-tag type="primary" closable>primary</n-tag>
  <n-tag type="success" closable>success</n-tag>
  <n-tag type="warning" closable>warning</n-tag>
  <n-tag type="danger" closable>danger</n-tag>
</template>
<script lang="ts" setup>
  const log = (e) => {
    console.log(e)
  }
</script>