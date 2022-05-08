
import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';
import './index.scss';

export interface SideNavProps extends HTMLAttributes {

}

const NSidenav = defineComponent({
  name: 'NSidenav',
  setup (_:SideNavProps, { slots }:SetupContext) {
    return () => (
      <div class="n-sidenav">
        <div class="n-child">
          {slots.default && slots.default()}
        </div>
      </div>
    );
  }
});

NSidenav.install = function (app:App) {
  app.component(NSidenav.name, NSidenav);
  return app;
};

export default NSidenav;
