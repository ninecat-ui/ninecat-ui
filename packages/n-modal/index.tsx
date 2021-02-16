import { defineComponent, App, SetupContext, Transition, PropType } from 'vue';
import './index.scss';
import classNames from '../../src/utils/className';
import NButton from '../n-button';

const ModalProps = {
  show: {
    type: Boolean as PropType<false>,
    default: false
  },
  size: {
    type: String as PropType<''>,
    default: 'md'
  },
  title: {
    type: String as PropType<''>,
    default: 'md'
  },
  confirm: {
    type: Function as PropType<() => void>,
    default: () => {}
  },
  cancel: {
    type: Function as PropType<() => void>,
    default: () => {}
  }
};

const NModal = defineComponent({
  name: 'NModal',
  props: ModalProps,
  setup (props, { slots, emit }: SetupContext) {
    const modalClass = () => {
      return classNames(['n-modal', `${props.size}`]);
    };

    const closeModal = () => {
      emit('close', false);
    };

    const nconfirm = () => {
      props.confirm();
      closeModal();
    };

    const ncancel = () => {
      props.cancel();
      closeModal();
    };

    return () => (
      <Transition name="nmodal">
        {props.show
          ? <div class="n-modal-wrapper">
          <div class="n-modal-backdrop" role="button" tabindex={-1} onClick={closeModal} />
          <div class={modalClass()}>
            <div class="n-modal-content">
              <div class="n-modal-header">
                <div class="title">
                  {props.title}
                </div>
                <div class="close">
                  <span class="icon-close" onClick={closeModal} />
                </div>
              </div>
              {slots.default && slots.default()}
              <div class="n-modal-footer">
                <NButton type="primary" onClick={nconfirm}>确认</NButton>
                <NButton onClick={ncancel}>取消</NButton>
              </div>
            </div>
          </div>
        </div >
          : null}
      </Transition>
    );
  }
});

NModal.install = function (app: App) {
  app.component(NModal.name, NModal);
  return app;
};

export default NModal;
