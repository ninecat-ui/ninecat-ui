import nSidenavItem from './src/index.vue';

nSidenavItem.install = function (Vue) {
  Vue.component(nSidenavItem.name, nSidenavItem);
};

export default nSidenavItem;
