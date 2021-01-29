import { defineComponent, App, HTMLAttributes, SetupContext, Transition, toRef } from 'vue'
import './index.scss'
import NButton from '../n-button'

export interface DrawerProps extends HTMLAttributes {
  show?: boolean | string;
  title?: string;
  confrim?: any;
  cancel?: any;
}

const NDrawer = defineComponent({
  name: 'NDrawer',

  setup(_: DrawerProps, { slots, attrs, emit }: SetupContext) {
    const props = attrs as DrawerProps
    const show = toRef(props, 'show')
    const closeDrawer = () => {
      emit('close', false)
    }

    const thisConfrim = () => {
      props.confrim()
      closeDrawer()
    }

    const thisCancel = () => {
      props.cancel()
      closeDrawer()
    }

    return () => (
      <Transition name="ndrawer">
        {show ? <div class="n-drawer-wrapper">
          <div class="n-drawer-backdrop" role="button" tabindex={-1} onClick={closeDrawer}>
          </div>
          <div class="n-drawer">
            <div class="n-drawer-header">
              <div class="title">
                {props.title}
              </div>
              <div class="close">
                <span
                  class="icon-close"
                  onClick={closeDrawer}
                />
              </div>
            </div>
            {slots.default && slots.default()}
            <div class="n-drawer-footer">
              <NButton
                type="primary"
                onClick={thisConfrim}
              >
                确认
          </NButton>
              <NButton onClick={thisCancel}>
                取消
          </NButton>
            </div>
          </div>
        </div> : null}
        
      </Transition>
    )
  }
})

NDrawer.install = function (app: App) {
  app.component(NDrawer.name, NDrawer)
}

export default NDrawer
