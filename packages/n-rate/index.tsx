import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';
import './index.scss';

const initDefaultProps = {
  value: 0,
  max: 5
};

export interface ReteProps extends HTMLAttributes {
  value?: string | number;
  max?: string | number;
}

const NRate = defineComponent({
  name: 'NRate',
  setup (_:ReteProps, { attrs }: SetupContext) {
    const props = attrs as ReteProps;
    const { value, max } = { ...initDefaultProps, ...props };

    const renderRates = () => {
      const arr = [];
      for (let i = 0; i < max; i++) {
        arr.push(i);
      }
      return arr.map((o) => {
        if ((o + 1) > value) {
          return (
            <i class="iconfont icon-collection"/>
          );
        } else {
          return (<i class="iconfont icon-collection-fill"/>);
        }
      });
    };

    return () => (
      <div class="rate">
        {renderRates()}
      </div>
    );
  }
});

NRate.install = function (app: App) {
  app.component(NRate.name, NRate);
};

export default NRate;
