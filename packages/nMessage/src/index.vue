<!--
  message component
  author:Terence
-->
<template>
  <div v-show="showMessage">
    <div
      class="base-message"
      :class="type"
    >
      <div class="message-content">
        <div class="content-cell">
          <n-icon
            :name="iconClass"
            :class="{'icon-title':hasTitle}"
          />
        </div>
        <div class="content-cell u-full">
          <span
            v-if="hasTitle"
            class="message-title"
          >
            {{ messageTitle }}
          </span>
          <p>
            {{ message }}
          </p>
          <n-icon
            v-if="type !== 'info'"
            name="icon-times"
            :class="iconClass"
            @click.native="closeMessage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nIcon from '../../nIcon'
export default {
  name: 'NMessage',
  components: {
    nIcon
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    messageTitle: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      showMessage: this.show,
      iconClass: `icon-${this.type}`,
      hasTitle: this.messageTitle !== ''
    }
  },
  methods: {
    closeMessage () {
      this.showMessage = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .base-message{
    position: relative;
    height: 60px;
    width: 500px;
    border-radius: 6px;
    display: flex;
    align-items: center;
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
  .message-content{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #575757;
    line-height: 20px;
    padding-left: 20px;
    display: flex;
    .message-title{
      margin-bottom: 8px;
      color: #272c36;
    }
    .content-cell{
      flex: 1;
    }
    .u-full{
      flex: 0 0 100%;
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
    .icon-title{
      font-size: 24px;
    }
    .icon-times{
      font-size: 12px;
      position: absolute;
      right: 8px;
      top:8px;
    }
    span{
      padding-left: 10px;
      display: inline-block;
    }
    p{
      margin: 0;
      padding-left: 10px;
    }
  }

</style>
