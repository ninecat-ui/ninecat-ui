<template>
  <div
    v-if="show"
    class="n-drawer-wrapper"
  >
    <div
      class="n-drawer-backdrop"
      role="button"
      tabindex="-1"
      @click="closeDrawer"
    />
    <transition name="ndrawer">
      <div class="n-drawer">
        <div class="n-drawer-header">
          <div class="title">
            {{ title }}
          </div>
          <div class="close">
            <span
              class="icon-close"
              @click="closeDrawer"
            />
          </div>
        </div>
        <slot />
        <div class="n-drawer-footer">
          <n-button
            type="primary"
            @click="nconfirm"
          >
            {{ t('ni.drawer.confirmButtonText') }}
          </n-button>
          <n-button @click="ncancel">
            {{ t('ni.drawer.cancelButtonText') }}
          </n-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Locale from '../../../src/mixins/locale'
import nButton from '../../nButton'
export default {
  name: 'NDrawer',
  components: {
    nButton
  },
  mixins: [Locale],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    confirm: {
      type: Function,
      default: function () {}
    },
    cancel: {
      type: Function,
      default: function () {}
    }
  },
  methods: {
    closeDrawer () {
      this.$emit('update:show', false)
    },
    nconfirm () {
      if (typeof this.confirm === 'function') {
        this.confirm()
      }
      this.closeDrawer()
    },
    ncancel () {
      if (typeof this.cancel === 'function') {
        this.cancel()
      }
      this.closeDrawer()
    }
  }
}
</script>

<style lang="scss" scoped>
.n-drawer-wrapper{
  position: fixed;
  overflow: auto;
  z-index: 1050;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  .n-drawer-backdrop{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #272c36;
    opacity: 0.3;
  }
  .n-drawer{
    background: #ffffff;
    opacity: 1;
    width: 50%;
    height: 100vh;
    overflow: visible;
    outline: 0;
    position: absolute;
    right: 0;
    top:0;
    z-index: 1050;
    .n-drawer-header {
        padding: 10px;
        display: flex;
        color:#575757;
        .title {
          font-size: 16px;
          width: 95%;
        }
        .close {
          text-align: center;
          cursor: pointer;
          width: 5%;
          .icon-close {
            position: relative;
            background-color: rgba(169, 169, 169, 0.2);
            border-radius: 50%;
            right: 0;
          }
          .icon-close::before,
          .icon-close::after {
            content: '';
            position: absolute;
            background-color: #888;
            height: 15px;
            width: 2px;
            right: 0;
            top: 50%;
            left: 50%;
          }
          .icon-close::before {
            transform: rotate(45deg);
          }
          .icon-close::after {
            transform: rotate(-45deg);
          }
        }
      }
    .n-drawer-footer{
      position: absolute;
      right: 10px;
      bottom: 5px;
    }
  }
}
.ndrawer-enter-active,  .ndrawer-leave-active {
    transition: all 0.3s linear;
    transform: translateX(0);
  }
   .ndrawer-enter,  .ndrawer-leave {
    transform: translateX(100%);
  }
   .ndrawer-leave-to{
     transform: translateX(100%);
   }
</style>
