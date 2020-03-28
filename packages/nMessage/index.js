import Vue from 'vue';
import NMessage from './src/index.vue';

const nMessage = function (options) {
  let defaults = {
    type: 'info',
    message: '一般的文字信息，默认左对齐，可以带图标。',
    duration: 3000
  };

  const Component = Vue.extend(NMessage);

  for (let key in options) {
    defaults[key] = options[key];
  }

  const { type, message, duration } = defaults;

  const vm = new Component({
    el: document.createElement('div'),
    data: function () {
      return {
        type,
        message,
        duration,
        show: true
      };
    }
  });

  document.body.appendChild(vm.$el);
};

export default nMessage;
