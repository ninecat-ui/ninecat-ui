import nSteps from './src/index.tsx';
nSteps.install = function (Vue) {
  Vue.component('nSteps', nSteps);
};

export default nSteps;
