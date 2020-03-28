import nProgress from './src/index.vue';

nProgress.install = function (Vue) {
  Vue.component(nProgress.name, nProgress);
};

export default nProgress;
