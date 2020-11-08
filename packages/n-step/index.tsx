import { defineComponent,App } from 'vue';
import './index.scss';

interface stepProps {
  title: string
  description: string,
  index: number,
  vertical: boolean,
  isLatest: boolean,
  active: boolean,
}

const NStep = defineComponent({
  name: 'NStep',
  props: ['title','description','isLatest','index', 'active', 'vertical'],
  setup(props:stepProps, {slots}) {
    return () => (
      <div class={['n-step',props.active ? 'active' : '',!props.vertical ? 'n-step-center' : '']}>
        <div>
          <div class={['icon',props.active ? 'active' : '' ]}>{props.index + 1}</div>
          { !props.isLatest && props.vertical  && <div class="vertical-line" /> }
        </div>
        <div class="content">
          <div class="title">{props.title}</div>
          <div class="description">{props.description}</div>
        </div>
        { !props.isLatest && !props.vertical && <div class="line" /> }
        {slots.default && slots.default()}
      </div>
    )
  }
})

NStep.install = function(app: App) {
  app.component(NStep.name, NStep);
  return app;
};

export default NStep;