import nAvatar from './src/index.vue';

nAvatar.install = function (Vue) {
  Vue.component(nAvatar.name, nAvatar);
};

export default nAvatar;
