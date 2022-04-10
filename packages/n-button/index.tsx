import { defineComponent, App, PropType, SetupContext } from 'vue';
import NLoader from '../n-loader';
import NIcon from '../n-icon';
import classNames from '../../src/utils/className';
import './index.scss';
import colorVar from '../theme/color.variables.scss';

const ButtonProps = {
  type: {
    type: String as PropType<string>,
    default: 'default'
  },
  status: {
    type: String as PropType<string>,
    default: 'default'
  },
  size: {
    type: String as PropType<string>,
    default: 'md'
  },
  shape: {
    type: String as PropType<string>,
    default: 'square'
  },
  icon: {
    type: String as PropType<string>,
    default: ''
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: false
  }
};

const NButton = defineComponent({
  name: 'NButton',
  props: ButtonProps,
  setup (props, { slots }: SetupContext) {
    const classString = classNames([
      'nbutton',
      `nbutton-type-${props.type}`,
      `nbutton-status-${props.status}`,
      `nbutton-shape-${props.shape}`,
      `nbutton-size-${props.size}`,
      props.loading ? 'nbutton-loading' : '',
      props.icon ? 'nbutton-hasicon' : '',
      props.disabled ? 'nbutton-disabled' : ''
    ]);
    const renderIcon = () => {
      if (props.loading || props.icon) {
        return (
          <span class={slots.default && slots.default() ? 'nbutton-icon' : (props.loading ? 'nbutton-loading-only' : 'nbutton-icon-only')}>
            {props.loading && <NLoader size="xs" show={true} color={colorVar[props.type]}/>}
            {props.icon && !props.loading && <NIcon class="nbutton-icon" name={props.icon} />}
          </span>
        );
      }
    };

    return () => (
        <button class={classString} disabled={props.disabled || props.loading}>
          <div class="nbutton-inner">
            {renderIcon()}
            <span class="nbutton-slot">{slots.default && slots.default()}</span>
          </div>
        </button>
    );
  }
});

NButton.install = function (app: App) {
  app.component(NButton.name, NButton);
  return app;
};

export default NButton;
