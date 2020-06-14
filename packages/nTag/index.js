import nTag from './src';
console.log(nTag);
nTag.install = function (Vue) {
  Vue.component('NTag', nTag);
};

export default nTag;
