import { defineComponent } from '@vue/composition-api';
import './index.scss';

export default defineComponent({
  name: 'NSteps',
  setup(props:object, {slots}) {
    return () => (
      <div class="n-step">
        Steps
      </div>
    )
  }
})