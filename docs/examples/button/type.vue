<template>
  <div class="demo-button">
    <n-button>Default</n-button>
    <n-button type="primary" @click="handleClick"> Primary </n-button>
    <n-button type="link"> Link </n-button>
    <n-button type="ghost"> Ghost </n-button>
    <n-button type="delicate"> Delicate </n-button>
  </div>
</template>
<script lang="ts" setup>
const handleClick = () => {
  alert("Ninecat");
};
</script>
