<!--
  alter compomemt
  author:Terence
-->
<template>
  <div v-show="showAlert">
    <div class="base-alert">
      sssss
    </div>
  </div>
</template>

<script>
export default {
  name: 'NAlert',
  data: function () {
    return {
      showAlert: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .base-alert{
    position: absolute;
    min-width: 188px;
    height: 88px;
    background: #E9F5FE;
    box-shadow: 0 2px 14px 0 rgba(0,0,0,0.06), 0 4px 8px 0 rgba(0,0,0,0.06);
    border-radius: 6px;
  }
</style>
