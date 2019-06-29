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
        <n-icon
          :name="iconClass"
        />
        <span class="message-text">{{ message }}</span>
        <n-icon
          id="alertCloseIcon"
          name="icon-times"
          :class="iconClass"
          @click.native="closeAlert"
        />
      </div>
    </div>
  </div>
</template>

<script>
import nIcon from '../../nIcon'
export default {
  name: 'NAlert',
  components: {
    nIcon
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'info'
    },
    message: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      showAlert: this.show,
      iconClass: `icon-${this.type}`
    }
  },
  methods: {
    closeAlert () {
      this.showAlert = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .base-alert{
    position: relative;
    min-width: 172px;
    height: 88px;
    box-shadow: 0 2px 14px 0 rgba(0,0,0,0.06), 0 4px 8px 0 rgba(0,0,0,0.06);
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    .alert-content{
        position:absolute;
        .iconfont{
          font-size: 12px;
        }
        .message-text{
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #575757;
          line-height: 20px;
          margin-left: 10px;
          margin-right: 10px;
        }
        .icon-info{
          color: #2196f3;
        }
        .icon-success{
          color: #4caf50;
        }
        .icon-warning{
          color: #ffb321;
        }
        .icon-error{
          color: #f44336;
        }
    }
  }
  .info{
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
