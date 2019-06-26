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
      <div class="alert-content">
        <span class="message-text">{{ message }}</span>
      </div>
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
    position: relative;
    min-width: 188px;
    height: 88px;
    box-shadow: 0 2px 14px 0 rgba(0,0,0,0.06), 0 4px 8px 0 rgba(0,0,0,0.06);
    border-radius: 6px;
    display: inline-block;
    .alert-content{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
        .message-text{
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #575757;
          line-height: 20px;
        }
    }
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
