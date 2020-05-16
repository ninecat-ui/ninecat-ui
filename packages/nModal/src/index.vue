<template>
  <transition name="nmodal">
    <div
      v-if="show"
      class="n-modal-wrapper"
    >
      <div
        class="n-modal-backdrop"
        role="button"
        tabindex="-1"
        @click="closeModal"
      />
      <div
        class="n-modal"
        :class="sizeClass"
      >
        <div class="n-modal-content">
          <div class="n-modal-header">
            <div class="title">
              {{ title }}
            </div>
            <div class="close">
              <span
                class="icon-close"
                @click="closeModal"
              />
            </div>
          </div>
          <slot />
          <div class="n-modal-footer">
            <n-button
              type="primary"
              @click="nconfirm"
            >
              {{ t('ni.modal.confirmButtonText') }}
            </n-button>
            <n-button @click="ncancel">
              {{ t('ni.drawer.cancelButtonText') }}
            </n-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Locale from '../../../src/mixins/locale';
import nButton from '../../nButton';

export default {
  name: 'NModal',
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
    size: {
      type: String,
      default: 'sm'
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
  computed: {
    sizeClass () {
      const { size } = this;
      return size;
    }
  },
  methods: {
    closeModal () {
      this.$emit('update:show', false);
    },
    nconfirm () {
      if (typeof this.confirm === 'function') {
        this.confirm();
      }
      this.closeModal();
    },
    ncancel () {
      if (typeof this.cancel === 'function') {
        this.cancel();
      }
      this.closeModal();
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
