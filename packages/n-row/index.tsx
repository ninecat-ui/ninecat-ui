
import { defineComponent, HTMLAttributes, SetupContext } from 'vue';

const initDefaultProps = {
  gutter: '',
  justify: 'center',
  align: 'center'
};

export interface RowProps extends HTMLAttributes {
  gutter?: number | string;
  justify?: string;
  align?: string;
}

const nRow = defineComponent({
  name: 'NRow',
  setup (_: RowProps, { slots, attrs }: SetupContext) {
    const props = attrs as RowProps;
    const { gutter, align, justify } = { ...initDefaultProps, ...props };

    const gutterStyle = () => {
      const temp = gutter ? { marginLeft: -gutter + 'px', marginRight: -gutter + 'px' } : '';
      const alignItems =
        align === 'top'
          ? 'flex-start'
          : align === 'middle'
            ? 'center'
            : align === 'bottom' ? 'flex-end' : '';
      return {
        display: 'flex',
        'justify-content': justify,
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
