import nStep from './src/index.tsx';
nStep.install = function (Vue) {
  Vue.component('nStep', nStep);
};

export default nStep;
