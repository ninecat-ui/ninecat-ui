import nTag from './src/index.vue';

nTag.install = function (Vue) {
  Vue.component(nTag.name, nTag);
};

export default nTag;
