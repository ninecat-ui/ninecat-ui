<!--
  alter compomemt
  author:Terence
-->
<template>
  <div v-show="showAlert">
    <div
      class="base-alert"
      :class="type"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NAlert',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'common'
    },
    message: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      showAlert: this.show
    }
  }
}
</script>

<style lang="scss" scoped>
  .base-alert{
    position: absolute;
    min-width: 188px;
    height: 88px;
    box-shadow: 0 2px 14px 0 rgba(0,0,0,0.06), 0 4px 8px 0 rgba(0,0,0,0.06);
    border-radius: 6px;
  }
  .common{
    background: #E9F5FE;
  }
  .success{
    background: #EDFAE1;
  }
  .warning{
    background: #FFF9E6;
  }
  .error{
    background: #FDE9EF;
  }
</style>
