
import { defineComponent, HTMLAttributes, SetupContext } from 'vue';
import useProvideRow from '../context/row';


const RowProps = {
  gutter:{
    type:Number,
    default:0
  },
  justify:{
    type:String,
    default:'center'
  },
  align:{
    type:String,
    default:'center'
  }
}


const nRow = defineComponent({
  name: 'NRow',
  props:RowProps,
  setup (props, { slots, attrs }: SetupContext) {

    useProvideRow({
      gutter:props.gutter
    })

    const gutterStyle = () => {
      const temp = props.gutter ? { marginLeft: -props.gutter + 'px', marginRight: -props.gutter + 'px' } : '';
      const alignItems =
      props.align === 'top'
          ? 'flex-start'
          : props.align === 'middle'
            ? 'center'
            : props.align === 'bottom' ? 'flex-end' : '';
      return {
        display: 'flex',
        'justify-content': props.justify,
        'align-items': alignItems,
        ...temp
      };
    };

    return () => (
      <div style={{ ...gutterStyle() }}>
        {slots.default && slots.default()}
      </div>
    );
  }
});

nRow.install = function (Vue) {
  Vue.component(nRow.name, nRow);
};

export default nRow;
