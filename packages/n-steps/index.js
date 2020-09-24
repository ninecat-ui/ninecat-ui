import nSteps from './src/index.tsx';
nSteps.install = function (Vue) {
  Vue.component('NSteps', nSteps);
};

export default nSteps;
