import nDrawer from './src/index.vue';

nDrawer.install = function (Vue) {
  Vue.component(nDrawer.name, nDrawer);
};

export default nDrawer;
