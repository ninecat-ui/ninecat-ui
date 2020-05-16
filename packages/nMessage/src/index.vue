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
@import './index.scss'
</style>
