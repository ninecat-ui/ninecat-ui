import { defineComponent, App } from 'vue';
import './index.scss';

function getStyle (color:string) {
  return {
    background: color,
    color: color ? '#ffffff' : ''
  };
}

const TagProps = {
  type: {
    type: String,
    default: 'normal'
  },
  color: {
    type: String,
    defalut: 'blue'
  },
  closable: {
    type: [String, Boolean],
    defalut: false
  }
};

const NTag = defineComponent({
  name: 'NTag',
  props: TagProps,
  setup (props, { slots }) {
    return () => (
      <div class="n-tag">
        <div class={props.type} style={getStyle(props.color)}>
          {slots.default && slots.default()}
          {props.closable !== false && <i class='iconfont icon-times' />}
        </div>
      </div>
    );
  }
});

NTag.install = function (app: App) {
  app.component(NTag.name, NTag);
  return app;
};

export default NTag;
