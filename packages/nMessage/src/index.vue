<!--
  message component
  author:Terence
-->
<template>
  <transition name="nmessage">
    <div
      v-show="show"
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
            id="messageCloseIcon"
            name="icon-times"
            :class="iconClass"
            @click.native="closeMessage"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import nIcon from '../../nIcon';
export default {
  name: 'NMessage',
  components: {
    nIcon
  },
  data: function () {
    return {
      timer: null,
      show: false,
      duration: '',
      message: '',
      type: '',
      messageTitle: '',
      hasTitle: false
    };
  },
  computed: {
    iconClass () {
      return `icon-${this.type}`;
    }
  },
  mounted () {
    this.startTimer();
  },
  methods: {
    closeMessage () {
      this.show = false;
    },
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.closeMessage();
        }, this.duration);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .base-message{
    position: fixed;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 999;
    top: 20px;
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
  .nmessage-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .nmessage-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
