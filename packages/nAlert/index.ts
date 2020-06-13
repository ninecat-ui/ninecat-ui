import nAlert from './src/index.vue';

(nAlert as any).install = function (Vue:any) {
  Vue.component(nAlert.name, nAlert);
};

export default nAlert;
