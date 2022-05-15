import type {PropType } from 'vue';
import { defineComponent, App, ref } from "vue";
import './index.scss'

const CheckTagProps = {
  size: {
    type: String,
    default: 'defalut'
  },
  round:{
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  },
  onChange: {
    type: Function as PropType<(e: MouseEvent) => void>,
  }
};

const NCheckTag = defineComponent({
  name:'NCheckTag',
  props: CheckTagProps,
  setup(props, { slots,emit }) {
    const handleClick = (e: MouseEvent) => {
      const { checked } = props;
      emit('update:checked', !checked);
      emit('change', !checked);
      emit('click', e);
    }
    return () => {
      return <div class="n-tag" onClick={handleClick}>
       <div class={`tag checkable ${props.checked ? 'checked' : ''} ${props.size}-size ${props.round ? 'round' : ''}`}>
        {slots.default && slots.default()}
      </div>
      </div>
    }
  }
})

NCheckTag.install = function (app: App) {
  app.component(NCheckTag.name, NCheckTag);
  return app;
};

export default NCheckTag