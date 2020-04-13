import nTree from './src/index.vue';

nTree.install = function (Vue) {
  Vue.component(nTree.name, nTree);
};

export default nTree;
