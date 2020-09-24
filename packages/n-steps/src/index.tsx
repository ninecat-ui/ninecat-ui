import { defineComponent } from '@vue/composition-api';
import './index.scss';

interface stepsProps {
  vertical: {
    type: Boolean,
    default: false,
  }
}

export default defineComponent({
  name: 'NSteps',
  setup(props:stepsProps, {slots}) {
    return () => (
      <div class={['n-steps',props.vertical ? 'vertical': 'horizontal']}>
        {slots.default && slots.default()}
      </div>
    )
  }
})