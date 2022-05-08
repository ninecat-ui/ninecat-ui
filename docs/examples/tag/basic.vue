<template>
  <n-tag >Tag 1</n-tag>
  <n-tag >
    <a target="_blank" href="https://github.com/ninecat-ui/ninecat-ui">
      {{text}}
    </a>
  </n-tag>
  <n-tag color="orange">Orange</n-tag>
  <n-tag closable>Closable</n-tag>
</template>

<script setup>
 const text = 'Link'
</script>