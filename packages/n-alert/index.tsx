import { defineComponent, App, PropType, SetupContext } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';
import NIcon from '../n-icon';

const AlterProps = {
  show: {
    type: Boolean as PropType<false>,
    default: false
  },
  closable: {
    type: Boolean as PropType<false>,
    default: false
  },
  type: {
    type: String as PropType<''>,
    default: 'info'
  },
  message: {
    type: String as PropType<''>
  },
  closeText: {
    type: String as PropType<''>
  },
  showIcon: {
    type: Boolean as PropType<false>
  },
  description: {
    type: String as PropType<''>
  }
};

const NAlert = defineComponent({
  name: 'NAlert',
  props: AlterProps,
  emits: ['update:show'],
  setup (props, { emit }: SetupContext) {
    const alertClass = () => {
      return classNames(['base-alert', props.type]);
    };
    const messageClass = () => {
      return classNames(['message-text', props.description ? 'title' : '']);
    };
    const iconClass = () => {
      return classNames([`icon-${props.type}`, props.description ? 'title-icon' : '']);
    };
    const closeAlert = () => {
      emit('update:show', false);
    };
    const renderCloseContent = () => {
      return (props.closeText
        ? <span class="close-text" onClick={closeAlert}>{props.closeText}</span>
        : <NIcon
        id="alertCloseIcon"
        name="icon-times"
        class={iconClass()}
        onClick={closeAlert}
      />);
    };
    return () => (
      props.show
        ? <div class={alertClass()}>
          <div class="alert-content">
            <div class="icon">
              {props.showIcon && <NIcon class={iconClass()} name={`icon-${props.type}`} /> }
            </div>
            <div class="content">
              <span class={messageClass()}>{props.message}</span>
              <p class="description">{props.description}</p>
            </div>
            <div class="close">
              {props.closable && renderCloseContent()}
            </div>
          </div>
        </div>
        : null
    );
  }
});

NAlert.install = function (app: App) {
  app.component(NAlert.name, NAlert);
  return app;
};

export default NAlert;
