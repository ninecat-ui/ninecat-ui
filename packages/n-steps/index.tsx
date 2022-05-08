// import nSteps from './src/index';
// nSteps.install = function (Vue) {
//   Vue.component('NSteps', nSteps);
// };

// export default nSteps;

import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';
import './index.scss';
import NStep from '../n-step/index';
import classNames from '../../src/utils/className';

export interface StepsProps extends HTMLAttributes {
  vertical?: boolean;
  active?: number;
}

const NSteps = defineComponent({
  name: 'NSteps',
  setup (_:StepsProps, { slots, attrs }: SetupContext) {
    const { vertical, active } = attrs as StepsProps;
    console.log(vertical);
    const renderChild = (child, index) => {
      const setpProps = {
        ...child.props,
        index,
        vertical,
        active: index === active - 1,
        isLatest: index === slots.default().length - 1
      };
      return (
        <NStep {...setpProps} />
      );
    };

    const stepsClass = () => {
      const classList = ['n-steps', vertical ? 'vertical' : 'horizontal'];
      return classNames(classList);
    };

    return () => (
      <div class={stepsClass()}>
        {(slots && slots.default()).map((child, index) => {
          return renderChild(child, index);
        })}
      </div>
    );
  }
});

NSteps.install = function (app: App) {
  app.component(NSteps.name, NSteps);
  return app;
};

export default NSteps;
