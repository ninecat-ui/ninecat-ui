import { defineComponent } from '@vue/composition-api';
import './index.scss';

export default defineComponent({
  name: 'NStep',
  setup(props:any, {slots}) {
    return () => (
      <div class="n-step">
        
      </div>
    )
  }
})