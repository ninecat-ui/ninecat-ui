import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';
import NLoader from '../n-loader';
import NIcon from '../n-icon';
import classNames from '../../src/utils/className';
import './index.scss';

const initDefaultProps = {
  type: 'default',
  icon: '',
  loading: false,
  size: ''
};

export interface ButtonProps extends HTMLAttributes {
  type?: string;
  disabled?: boolean;
  size?: string;
  icon?: string;
  loading?: boolean;
}

const NButton = defineComponent({
  name: 'NButton',
  setup (_: ButtonProps, { slots, attrs }: SetupContext) {
    const props = attrs as ButtonProps;
    const buttonProps = { ...initDefaultProps, ...props };
    const { size, disabled, loading, icon, type } = buttonProps;
    const classString = classNames([
      'nbutton',
      type,
      disabled ? 'nbutton-disabled' : '',
      size
    ]);
    const renderIcon = () => {
      if (loading || icon) {
        return (
          <span class="nbutton-icon">
            {loading && <NLoader size="xs" show={true}/>}
            {icon && !loading && <NIcon name={icon} />}
          </span>
        );
      }
    };

    return () => (
        <button class={classString} disabled={disabled}>
          <div class="nbutton-content">
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
