import nList from './src/index.vue';

nList.install = function (Vue) {
  Vue.component(nList.name, nList);
};

export default nList;
