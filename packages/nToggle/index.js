import nToggle from './src/index.vue';

nToggle.install = function (Vue) {
  Vue.component(nToggle.name, nToggle);
};

export default nToggle;
