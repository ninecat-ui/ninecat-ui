import { defineComponent } from '@vue/composition-api';
import './index.scss';

interface stepProps {
  title: String
  description: String
}

export default defineComponent({
  name: 'NStep',
  props: ['title','description'],
  setup(props:stepProps, {slots}) {
    return () => (
      <div class={['n-step']}>
        {props.title}
        {props.description}
        {slots.default && slots.default()}
      </div>
    )
  }
})