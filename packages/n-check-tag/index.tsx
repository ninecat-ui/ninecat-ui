import { defineComponent, App, ref } from "vue";

const CheckTagProps = {
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
};

const NCheckTag = defineComponent({
  name:'NCheckTag',
  props: CheckTagProps,
  setup(props, { slots }) {
    return () => {
      return <span class="tag">
        {slots.default && slots.default()}
      </span>
    }
  }
})

NCheckTag.install = function (app: App) {
  app.component(NCheckTag.name, NCheckTag);
  return app;
};

export default NCheckTag