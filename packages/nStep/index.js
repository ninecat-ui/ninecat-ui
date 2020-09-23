import nStep from './src/index.tsx';
nStep.install = function (Vue) {
  Vue.component('NTag', nStep);
};

export default nStep;
