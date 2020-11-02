
<template>
  <div>
    <ninecat-demo1 />
    <!-- <n-button>Default</n-button>
    <n-button
      type="primary"
      @click="handleClick"
    >
      Primary
    </n-button>
    <n-button type="link">
      Link
    </n-button>
    <n-button type="ghost">
      Ghost
    </n-button>
    <n-button type="delicate">
      Delicate
    </n-button> -->
  </div>
</template>
<script>
/* eslint-disable */
// eslinit-disable
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"
export default {
  components: {
    'ninecat-demo1': (function () {
      function render (_ctx, _cache) {
        const _component_n_button = _resolveComponent('n-button');
        const _component_n_icon = _resolveComponent('n-icon');

        return (_openBlock(), _createBlock('div', null, [
          // _createVNode('template', null, [
            _createVNode(_component_n_button, { icon: 'icon-home' }),
            _createVNode(_component_n_button, null, {
              default: _withCtx(() => [
                _createVNode(_component_n_icon, { name: 'icon-home' })
              ]),
              _: 1
            }),
            _createVNode(_component_n_button, {
              icon: 'icon-home',
              type: 'primary'
            }),
            _createVNode(_component_n_button, {
              icon: 'icon-home',
              type: 'link'
            })
          // ])
        ]));
      }
      return {
        render
      };
    })()
  },
  methods: {
    handleClick () {
      alert('Ninecat');
    }
  }
};
</script>
