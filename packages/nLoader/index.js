import nLoader from './src/index.vue';

nLoader.install = function (Vue) {
  Vue.component(nLoader.name, nLoader);
};

export default nLoader;
