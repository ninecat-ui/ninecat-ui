<!--
  alter compomemt
  author:Terence
-->
<template>
  <div
    v-show="showAlert"
    class="base-alert"
    :class="type"
  >
    <div class="alert-content">
      <n-icon :name="iconClass" />
      <span class="message-text">{{ message }}</span>
      <n-icon
        id="alertCloseIcon"
        name="icon-times"
        :class="iconClass"
        @click.native="closeAlert"
      />
    </div>
  </div>
</template>

<script>
import nIcon from '../../nIcon';
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
    };
  },
  methods: {
    closeAlert () {
      this.showAlert = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.base-alert {
  position: relative;
  margin: 10px 0;
  min-width: 172px;
  height: 50px;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.06), 0 4px 8px 0 rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  .alert-content {
    position: absolute;
    .iconfont {
      font-size: 12px;
    }
    .message-text {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #575757;
      line-height: 20px;
      margin-left: 10px;
      margin-right: 10px;
    }
    .icon-info {
      color: #2196f3;
      cursor: pointer;
    }
    .icon-success {
      color: #4caf50;
      cursor: pointer;
    }
    .icon-warning {
      color: #ffb321;
      cursor: pointer;
    }
    .icon-error {
      color: #f44336;
      cursor: pointer;
    }
  }
}
.info {
  background: #e9f5fe;
}
.success {
  background: #edfae1;
}
.warning {
  background: #fff9e6;
}
.error {
  background: #fde9ef;
}
</style>
