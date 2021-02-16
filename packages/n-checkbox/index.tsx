import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';
import './index.scss';
import { guid } from '../../src/utils/util';

const initDefaultProps = {
  checked: false,
  defaultChecked: false
};
export interface CheckboxProps extends HTMLAttributes {
  checked?: boolean;
  defaultChecked?: boolean;
}

const nCheckbox = defineComponent({
  name: 'NCheckbox',
  setup (_:CheckboxProps, { slots, attrs }: SetupContext) {
    const props = attrs as CheckboxProps;

    const { checked, defaultChecked } = { ...initDefaultProps, ...props };

    const id = guid();
    const checkeval = () => {
      if (checked) {
        return checked;
      }
      return defaultChecked;
    };
    return () => (
      <div class="n-checkbox">
        <input id={id} type="checkbox" checked={checkeval()}/>
        <label for={id} />
        <div class="slot-text">
          {slots.default && slots.default()}
        </div>
      </div>
    );
  }
});

nCheckbox.install = function (app: App) {
  app.component('NCheckbox', nCheckbox);
};

export default nCheckbox;
