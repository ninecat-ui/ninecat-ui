import { defineComponent, App, PropType, toRefs } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';

const LoaderProps = {
  show: {
    type: Boolean as PropType<true>,
    default: false
  },
  loaddingText: {
    type: String as PropType<string>,
    default: ''
  },
  size: {
    type: String as PropType<string>,
    default: 'md'
  }
};

const NLoader = defineComponent({
  name: 'NLoader',
  props: LoaderProps,
  setup (props) {
    const { show, loaddingText, size } = toRefs(props);

    const sizeStyle = () => {
      switch (size.value) {
        case 'xs':
          return {
            height: '16px',
            width: '16px'
          };
        case 'sm':
          return {
            height: '18px',
            width: '18px'
          };
        case 'md':
          return {
            height: '36px',
            width: '36px'
          };
        case 'lg':
          return {
            height: '64px',
            width: '64px'
          };
        default:
          return {
            height: '36px',
            width: '36px'
          };
      }
    };

    const spanClass = () => {
      return classNames(['loadding-text', `${size.value}-text`]);
    };

    return () => (
      show && <span class="loadding">
        <div style={{ ...sizeStyle() }} />
        <span class={spanClass()}>{loaddingText.value}</span>
      </span>
    );
  }
});

NLoader.install = function (app:App) {
  app.component(NLoader.name, NLoader);
  return app;
};

export default NLoader;
