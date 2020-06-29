import nTag from './src/index.tsx';
nTag.install = function (Vue) {
  Vue.component('NTag', nTag);
};

export default nTag;
