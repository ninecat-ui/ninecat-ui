import { defineComponent, App, HTMLAttributes, SetupContext, Transition, ref } from 'vue'
import './index.scss'
import classNames from '../../src/utils/className';
import NButton from '../n-button'

export interface ModalProps extends HTMLAttributes {
  show?: boolean;
  title?: string;
  size?: string;
  confirm?: any;
  cancel?: any;
}

const initDefaultProps = {
  size: 'sm'
}

const NModal = defineComponent({
  name: 'NModal',
  setup(_: ModalProps, { slots, attrs, emit }: SetupContext) {
    const props = attrs as ModalProps
    const modalProps = { ...initDefaultProps, ...props }

    const modalClass = classNames(['n-modal', `${modalProps.size}`])

    const closeModal = () => { 
      emit('close', false)
    }

    const nconfirm = () => {
      props.confirm()
      closeModal()
     }

    const ncancel = () => {
      props.cancel()
      closeModal()
     }

    return () => (
      <Transition name="nmodal">
        {props.show ? <div class="n-modal-wrapper">
          <div class="n-modal-backdrop" role="button" tabindex={-1} onClick={closeModal} />
          <div class={modalClass}>
            <div class="n-modal-content">
              <div class="n-modal-header">
                <div class="title">
                  {modalProps.title}
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
        </div > : null}
      </Transition>
    )
  }
})

NModal.install = function (app: App) {
  app.component(NModal.name, NModal);
  return app;
};

export default NModal;
