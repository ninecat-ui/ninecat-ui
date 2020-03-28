import nCol from './src/index.vue';

nCol.install = function (Vue) {
  Vue.component(nCol.name, nCol);
};

export default nCol;
