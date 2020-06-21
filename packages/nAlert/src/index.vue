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
import './index.scss';
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
@import './index.scss'
</style>
