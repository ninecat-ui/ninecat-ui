
import type {PropType } from 'vue';
import { defineComponent, App, ref } from "vue";
import "./index.scss";

function getStyle(color: string | undefined,background: string | undefined) {
  return {
    background: background,
    color: color,
  };
}

const TagProps = {
  type: {
    type: String,
    default: "normal",
  },
  size: {
    type: String,
    default: 'defalut'
  },
  theme: {
    type: String,
    default: 'light'
  },
  round:{
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    defalut: "",
  },
  background: {
    type: String,
    defalut: "",
  },
  closable: {
    type: [String, Boolean],
    defalut: false,
  },
  onClose: {
    type: Function as PropType<(e: MouseEvent) => void>,
  },
};

const NTag = defineComponent({
  name: "NTag",
  props: TagProps,
  setup(props, { slots }) {
    const show = ref(true);
    const closeTag = (e: MouseEvent) => {
      if (props.onClose){
        props.onClose(e)
      } else {
        show.value = false;
      }
    };
    return () => {
      if (show.value) {
        return (
          <div class="n-tag">
            <div class={`tag ${props.type} ${props.theme}-theme ${props.round ? 'round' : ''} ${props.size}-size`} style={getStyle(props.color,props.background)}>
              {slots.default && slots.default()}
              {props.closable !== false && (
                <i onClick={closeTag} class="iconfont icon-times close" />
              )}
            </div>
          </div>
        );
      } else {
        return null;
      }
    };
  },
});

NTag.install = function (app: App) {
  app.component(NTag.name, NTag);
  return app;
};

export default NTag;
