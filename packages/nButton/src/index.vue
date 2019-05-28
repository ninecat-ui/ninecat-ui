<template>
  <button class="nButton">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'NButton'
}
</script>

<style lang="scss" scoped>
.nButton{
  padding: 0.5em 1em;
  background-color: #F7F7FA;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  &:focus,&:hover{
    background-color: #E5E5EA;
    outline: none;
  }
}
</style>
