import { defineComponent,App,HTMLAttributes,SetupContext } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';

const initDefaultProps = {
  show: false,
  loaddingText: 'Loading...',
  size: 'md'
}

export interface LoaderProps extends HTMLAttributes {
  show?: boolean;
  loaddingText?: string;
  size?: string;
}

const NLoader = defineComponent({
  name: 'NLoader',
  setup(_:LoaderProps, {attrs }: SetupContext) {
    const props = attrs as LoaderProps;
    const {show, loaddingText, size} = {...initDefaultProps, ...props};

    const sizeStyle = () => {
      switch (size) {
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
    }

    const spanClass = () => {
      return classNames(['loadding-text',`${size}-text`])
    }

    return () => (
      show && <div class="loadding">
        <div style={{...sizeStyle()}} />
        <span class={spanClass()}>{loaddingText}</span>
      </div>
    )
  }
})

NLoader.install = function (app:App) {
  app.component(NLoader.name, NLoader);
  return app
};

export default NLoader;
