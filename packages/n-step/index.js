import nStep from './src/index.tsx';
nStep.install = function (Vue) {
  Vue.component('NStep', nStep);
};

export default nStep;
