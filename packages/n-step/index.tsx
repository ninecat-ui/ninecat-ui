import { defineComponent, App } from 'vue';
import './index.scss';
import classNames from '../../src/utils/className';

interface stepProps {
  title?: string
  description?: string,
  index?: number,
  vertical?: boolean,
  isLatest?: boolean,
  active?: boolean,
}

const NStep = defineComponent({
  name: 'NStep',
  setup (_:stepProps, { slots, attrs }) {
    const { active, vertical, index, isLatest, title, description } = attrs as stepProps;

    const nStepClass = () => {
      const classList = ['n-step', active ? 'active' : '', vertical ? '' : 'n-step-center'];
      return classNames(classList);
    };

    const iconClass = () => {
      const classList = ['icon', active ? 'active' : ''];
      return classNames(classList);
    };

    console.log(isLatest);
    console.log(vertical);

    return () => (
      <div class={nStepClass()}>
        <div>
          <div class={iconClass()}>{index + 1}</div>
          { !isLatest && vertical && <div class="vertical-line" /> }
        </div>
        <div class="content">
          <div class="title">{title}</div>
          <div class="description">{description}</div>
        </div>
        { !isLatest && !vertical && <div class="line" /> }
        {slots.default && slots.default()}
      </div>
    );
  }
});

NStep.install = function (app: App) {
  app.component(NStep.name, NStep);
  return app;
};

export default NStep;
