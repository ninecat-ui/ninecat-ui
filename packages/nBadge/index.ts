import NBadge from './src/index.vue';

(NBadge as any).install = function (Vue:any) {
  Vue.component(NBadge.name, NBadge);
};

export default NBadge;
