import { defineComponent,onMounted } from '@vue/composition-api';
import './index.scss';

interface stepProps {
  title: string
  description: string,
  isLatest: boolean,
  index: number,
  active: boolean,
}

export default defineComponent({
  name: 'NStep',
  props: ['title','description','isLatest','index', 'active'],
  setup(props:stepProps, {slots}) {
    return () => (
      <div class={['n-step',props.active ? 'active' : '']}>
        <div class={['icon',props.active ? 'active' : '' ]}>{props.index + 1}</div>
        <div class="content">
          <div class="title">{props.title}</div>
          <div class="description">{props.description}</div>
        </div>
        { !props.isLatest && <div class="line" /> }
        {slots.default && slots.default()}
      </div>
    )
  }
})