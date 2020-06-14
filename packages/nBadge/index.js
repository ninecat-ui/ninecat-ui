import NBadge from './src/index.vue';

NBadge.install = function (Vue) {
  Vue.component(NBadge.name, NBadge);
};

export default NBadge;
