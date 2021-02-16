import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';

export interface IconProps extends HTMLAttributes {
  name?: string;
}

const NIcon = defineComponent({
  name: 'NIcon',
  setup (_:IconProps, { attrs }: SetupContext) {
    const props = attrs as IconProps;
    const { name } = props;
    return () => (
        <i class={'iconfont ' + name}/>
    );
  }
});

NIcon.install = function (app: App) {
  app.component(NIcon.name, NIcon);
  return app;
};

export default NIcon;
