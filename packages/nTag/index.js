import nTag from './src/index.tsx';
console.log(nTag);
nTag.install = function (Vue) {
  Vue.component('NTag', nTag);
};

export default nTag;
