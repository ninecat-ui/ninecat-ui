import { defineComponent, App, PropType } from 'vue';

const IconProps = {
  id: {
    type: String as PropType<string>,
    default: ''
  },
  name: {
    type: String as PropType<string>,
    default: ''
  },
  click: {
    type: Function as PropType<() => void>,
    default: () => {}
  }
};

const NIcon = defineComponent({
  name: 'NIcon',
  props: IconProps,
  setup (props) {
    const { name,click } = props;
    return () => (
        <i class={'iconfont ' + name} onClick={click}/>
    );
  }
});

NIcon.install = function (app: App) {
  app.component(NIcon.name, NIcon);
  return app;
};

export default NIcon;
