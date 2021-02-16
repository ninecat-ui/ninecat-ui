import { defineComponent, App, PropType, SetupContext, Transition } from 'vue';
import './index.scss';
import NButton from '../n-button';

const DrawerProps = {
  show: {
    type: Boolean as PropType<false>,
    default: false
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

const NDrawer = defineComponent({
  name: 'NDrawer',
  props: DrawerProps,
  setup (props, { slots, emit }: SetupContext) {
    const closeDrawer = () => {
      emit('close', false);
    };

    const thisConfirm = () => {
      props.confirm();
      closeDrawer();
    };

    const thisCancel = () => {
      props.cancel();
      closeDrawer();
    };

    return () => (
      <Transition name="ndrawer">
        {props.show
          ? <div class="n-drawer-wrapper">
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
                onClick={thisConfirm}
              >
                确认
          </NButton>
              <NButton onClick={thisCancel}>
                取消
          </NButton>
            </div>
          </div>
        </div>
          : null}

      </Transition>
    );
  }
});

NDrawer.install = function (app: App) {
  app.component(NDrawer.name, NDrawer);
};

export default NDrawer;
