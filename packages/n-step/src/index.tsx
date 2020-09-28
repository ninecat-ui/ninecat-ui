import { defineComponent,onMounted } from '@vue/composition-api';
import './index.scss';

interface stepProps {
  title: String
  description: String
}

export default defineComponent({
  name: 'NStep',
  props: ['title','description'],
  setup(props:stepProps, {parent,slots}) {
    onMounted(async () => {
      if (parent !== null) {
        console.log(parent.$attrs.active)
      }
    })
    return () => (
      <div class={['n-step']}>
        <div class="icon">1</div>
        <div class="content">
          <div class="title">{props.title}</div>
          <div class="description">{props.description}</div>
        </div>
        <div class="line" />
        {slots.default && slots.default()}
      </div>
    )
  }
})