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
import Locale from '../../../src/mixins/locale';
import nButton from '../../nButton';
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
      this.$emit('update:show', false);
    },
    nconfirm () {
      if (typeof this.confirm === 'function') {
        this.confirm();
      }
      this.closeDrawer();
    },
    ncancel () {
      if (typeof this.cancel === 'function') {
        this.cancel();
      }
      this.closeDrawer();
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
