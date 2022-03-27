import { App } from 'vue';

import nTag from '../packages/n-tag';

const components = [
    nTag
]

const install = function (app: App) {
    components.forEach(component => {
      app.use(component as unknown as { install: () => any });
    });
    return app;
  };

export {
    nTag
}

export default {
    install
}