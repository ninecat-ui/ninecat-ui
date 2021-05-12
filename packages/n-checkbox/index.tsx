import { defineComponent, App, PropType, SetupContext } from 'vue';
import './index.scss';
import { guid } from '../../src/utils/util';

const CheckboxProps = {
  checked: {
    type: Boolean as PropType<false>,
    default: false
  },
  defaultChecked: {
    type: Boolean as PropType<false>,
    default: false
  },
  disabled: {
    type: Boolean as PropType<false>,
    default: false
  }
};

const nCheckbox = defineComponent({
  name: 'NCheckbox',
  props: CheckboxProps,
  setup (props, { slots }: SetupContext) {
    const id = guid();
    const checkeval = () => {
      if (props.checked) {
        return props.checked;
      }
      return false;
    };
    return () => (
      <div class="n-checkbox">
        <input id={id} class={[props.disabled ? 'n-checkbox-disble' : '']} disabled={props.disabled} type="checkbox" checked={checkeval()}/>
        <label for={id} class={[props.disabled ? 'n-checkbox-disble' : '']}/>
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
