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
};

const NTag = defineComponent({
  name: "NTag",
  props: TagProps,
  setup(props, { slots }) {
    const show = ref(true);
    const closeTag = () => {
      show.value = false;
    };
    return () => {
      if (show.value) {
        return (
          <div class="n-tag">
            <div class={`${props.type} tag`} style={getStyle(props.color,props.background)}>
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
