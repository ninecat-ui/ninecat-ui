import nTooltip from './src/index.vue';

nTooltip.install = function (Vue) {
  Vue.component(nTooltip.name, nTooltip);
};

export default nTooltip;
