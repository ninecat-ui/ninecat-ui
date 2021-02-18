import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';
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
      `${type}`,
      disabled ? 'nbutton-disabled' : '',
      `${size}`
    ]);
    const renderIcon = () => {
      if (loading || icon) {
        return (
          <span class="nbutton-icon">
            {loading && <n-icon class="loading" name="icon-wind-loading"/>}
            {icon && !loading && <n-icon name={icon} />}
          </span>
        );
      }
    };
    const renderSolt = () => (
        <span class="nbutton-content">
          {slots.default && slots.default()}
        </span>
    );

    return () => (
        <button class={classString} disabled={disabled}>
          {renderIcon()}
          {renderSolt()}
        </button>
    );
  }
});

NButton.install = function (app: App) {
  app.component(NButton.name, NButton);
  return app;
};

export default NButton;
