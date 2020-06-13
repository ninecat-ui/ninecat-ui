import nAvatar from './src/index.vue';

(nAvatar as any).install = function (Vue: any) {
  Vue.component(nAvatar.name, nAvatar);
};

export default nAvatar;
