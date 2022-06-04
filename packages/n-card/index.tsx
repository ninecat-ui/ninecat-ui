import { defineComponent, App, PropType, SetupContext } from "vue";
import classNames from "../../src/utils/className";
import "./index.scss";

const CardProps = {
  title: {
    type: String as PropType<string>,
  },
  size: {
    type: String as PropType<string>,
    default: "default",
  },
  bordered: {
    type: Boolean,
    default: true,
  },
  shadow: {
    type: String as PropType<string>,
    default: "never",
  },
  bodyStyle: Object
};

const NCard = defineComponent({
  name: "NCard",
  props: CardProps,
  setup(props, { attrs, slots }: SetupContext) {
    const classString = classNames([
      "n-card",
      props.bordered ? "n-card-bordered" : "",
      `n-card-size-${props.size}`,
      `n-card-shadow-${props.shadow}`,
    ]);
    return () => (
      <div class={classString}>
        {slots.header ? (
          <div class="n-card-head">
             {slots.header()}
          </div>
        ) : (
           props.title ? <div class="n-card-head">
            <div class="n-card-head-title">{props.title}</div>
            <div class="n-card-extra">{slots.extra && slots.extra()}</div>
          </div> : ''
        )}
        <div class="n-card-body" style={{...props.bodyStyle}}>{slots.default && slots.default()}</div>
      </div>
    );
  },
});

NCard.install = function (app: App) {
  app.component(NCard.name, NCard);
  return app;
};

export default NCard;
