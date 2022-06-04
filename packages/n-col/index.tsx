import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';
import { useInjectRow } from '../context/row';


const ColProps = {
  span: {
    type:[String,Number]
  },
  offset: {
    type:[String,Number]
  }
}

const nCol = defineComponent({
  name: 'NCol',
  props:ColProps,
  setup (props, { slots, attrs }: SetupContext) {
    const { gutter } = useInjectRow();
    console.log(gutter)
    const classString = classNames([
      'n-col',
      props.span ? `n-col-${props.span}` : '',
      props.offset ? `offset-${props.offset}` : ''
    ]);
    return () => (
      <div class={classString} style={gutter ? {paddingLeft:`${gutter}px`,paddingRight:`${gutter}px`} : {}}>
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
