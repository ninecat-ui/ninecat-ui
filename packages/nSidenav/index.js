import nSidenav from './src/index.vue';

nSidenav.install = function (Vue) {
  Vue.component(nSidenav.name, nSidenav);
};

export default nSidenav;
