import { App } from 'vue';
import './assets/font/iconfont.scss';

import NTag from '../packages/n-tag';

const components = [
  NTag
]

const install = function (app: App) {
    components.forEach(component => {
      app.use(component as unknown as { install: () => any });
    });
    return app;
  };

export {
  NTag
}

export default {
    install
}