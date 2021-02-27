import { defineComponent, App, PropType, SetupContext } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';
import NIcon from '../n-icon';

const AlterProps = {
  show: {
    type: Boolean as PropType<false>,
    default: false
  },
  type: {
    type: String as PropType<''>
  },
  message: {
    type: String as PropType<''>
  }
};

const NAlert = defineComponent({
  name: 'NAlert',
  props: AlterProps,
  setup (props, { emit }: SetupContext) {
    // const { show, type, message } = toRefs(props);

    const alertClass = () => {
      return classNames(['base-alert', props.type]);
    };
    const iconClass = classNames([`icon-${props.type}`]);
    const closeAlert = () => {
      emit('update:show', false);
    };
    return () => (
      props.show
        ? <div class={alertClass()}>
        <div class="alert-content">
          <NIcon name={`icon-${props.type}`}/>
          <span class="message-text">{props.message }</span>
          <NIcon
            id="alertCloseIcon"
            name="icon-times"
            class={iconClass}
            onClick={closeAlert}
          />
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
