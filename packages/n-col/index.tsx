import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';

export interface ColProps extends HTMLAttributes {
  span?: string | number;
  offset?: string | number;
}

const nCol = defineComponent({
  name: 'NCol',
  setup (_:ColProps, { slots, attrs }: SetupContext) {
    const props = attrs as ColProps;
    const { span, offset } = props;
    const classString = classNames([
      'n-col',
      span ? `n-col-${span}` : '',
      offset ? `offset-${offset}` : ''
    ]);
    return () => (
      <div class={classString}>
         {slots.default && slots.default()}
      </div>
    );
  }
});

nCol.install = function (app: App) {
  app.component(nCol.name, nCol);
  return app;
};

export default nCol;
