// import nInput from './src/index.vue';

import { defineComponent, App, toRefs, reactive, SetupContext } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';

const InputProps = {
  modelValue: {
    type: [String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md'
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  }
};

const NInput = defineComponent({
  name: 'NInput',
  props: InputProps,
  setup (props, { emit }:SetupContext) {
    const inputRef = reactive({
      val: props.modelValue || ''
    });
    const { size, disabled, type, placeholder } = toRefs(props);
    const inputClass = () => {
      return classNames(['n-input', size.value ? 'n-input-' + size.value : '', disabled.value ? 'n-input-disabled' : '']);
    };

    const inputHandle = (e) => {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.val = targetValue;
      emit('update:modelValue', targetValue);
      emit('change', e);
    };

    const blurHandle = (e) => {
      emit('blur', e);
    };

    const focusHandle = (e) => {
      emit('focus', e);
    };

    return () => (
      <input
        value={inputRef.val}
        type={type.value}
        placeholder={placeholder.value}
        disabled={disabled.value}
        class={inputClass()}
        onInput={inputHandle}
        onBlur={blurHandle}
        onFocus={focusHandle}
      />
    );
  }
});

NInput.install = function (app: App) {
  app.component(NInput.name, NInput);
};

export default NInput;
