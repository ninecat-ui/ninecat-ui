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
.n-modal-wrapper {
  position: fixed;
  overflow: auto;
  z-index: 1050;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  .n-modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #272c36;
    opacity: 0.3;
  }
  .n-modal {
    background: #ffffff;
    opacity: 1;
    overflow: visible;
    outline: 0;
    border-radius: 6px;
    margin: 30px auto 0;
    position: relative;
    z-index: 1050;
    .n-modal-content {
      position: relative;
      background-color: #fff;
      border-radius: 6px;
      outline: 0;
      -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12),
        0 0 10px rgba(0, 0, 0, 0.06);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12), 0 0 10px rgba(0, 0, 0, 0.06);
      padding: 20px;
      .n-modal-header {
        display: flex;
        .title {
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
      .n-modal-footer{
        text-align: end;
      }
    }
  }
  .xs{
    width: 400px;
  }
  .sm{
    width: 600px;
  }
  .md{
    width: 800px;
  }
  .lg{
    width: 1000px;
  }
}

.nmodal-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.nmodal-enter, .fade-leave-to {
  opacity: 0;
}

</style>
