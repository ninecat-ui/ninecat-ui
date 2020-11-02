<template>
  <div><n-button>Default</n-button>
  <n-button
    type="primary"
    @click="handleClick"
  >
    Primary
  </n-button>
  <n-button type="link">
    Link
  </n-button>
  <n-button type="ghost">
    Ghost
  </n-button>
  <n-button type="delicate">
    Delicate
  </n-button></div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      alert('Ninecat');
    }
  }
};
</script>
