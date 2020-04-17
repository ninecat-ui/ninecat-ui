<template>
  <ul class="tree-ul">
    <li class="tree-li">
      <svg
        t="1585220115926"
        class="n-tree-icon point"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2222"
        width="10"
        height="10"
        :style="{
          transform: `rotate(${data.expand ? '0' : '-90'}deg)`,
          visibility: data[root.defaultProps.children].length ? 'visible' : 'hidden'
        }"
        @click="handlerExpand"
      >
        <path
          d="M151.476947 199.553918l718.53082 0c39.763632 0 71.922053 31.909757 71.922053 71.675436 0 18.485003-7.095605 35.205826-18.486026 47.872311L568.114019 793.227056c-23.810289 31.400151-68.641333 37.993313-100.29731 14.183024-5.570879-4.052293-10.384511-8.873088-14.183024-14.190187L94.235245 314.041416c-23.547299-31.407314-17.217127-76.479859 14.436804-100.041484 12.922311-9.881045 27.864628-14.43885 42.804898-14.43885l0 0L151.476947 199.553918zM151.476947 199.553918"
          p-id="2223"
          fill="#c0c4cc"
        />
      </svg>
      <input
        v-if="root.showCheckbox"
        v-model="isChecked"
        type="checkbox"
        class="tree-checkbox point"
        @change="handlerChecked"
      >
      <div
        class="tree-content point"
        @click="handlerClick"
      >
        <Render />
      </div>
    </li>
    <div v-if="data[root.defaultProps.children].length && data.expand">
      <node
        v-for="item of data[root.defaultProps.children]"
        :key="item[root.nodeKey]"
        :data="item"
      />
    </div>
  </ul>
</template>

<script>
import { deepCopy } from './utils.js';
export default {
  name: 'Node',
  components: {
    Render: { // 渲染函数改jsx
      render () {
        const { data, root } = this.$parent;
        const { name } = root.defaultProps;
        /* eslint-disable */
        return root.$scopedSlots.default ? root.$scopedSlots.default(data) : <div class="tree-text">
          { data.$keys && data.$keys.length ? data[name].split('').map(
            (curr, i) => <span style={{ color: data.$keys.indexOf(i) > -1 ? 'red': '#666' }}>{curr}</span>
          ) : <span style={{ color: '#666' }}>{data[name]}</span> }
        </div>
      }
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      root: null,
      isChecked: this.data.checked,
      children: []
    };
  },
  created () {
    const { data } = this;
    const parent = this.$parent;
    this.root = parent.isTree ? parent : parent.root;
    this.$set(data, '$pid', parent.isTree ? null : parent.data[this.root.nodeKey]);
    const { children } = this.root.defaultProps;
    this.children = data[children];
  },
  watch: {
    'children': {
      handler (newVal) {
        newVal.length && (this.data.checked = newVal.every(item => item.checked));
      },
      deep: true
    },
    'data.checked' (newVal) {
      this.isChecked = newVal;
    }
  },
  methods: {
    handlerChecked (e) {
      const { data, root } = this;
      data.checked = !data.checked;
      root.$emit('node-checked', e, deepCopy(data));
      this.root._downwardUpdateChecked(data);
    },
    handlerExpand (e) {
      const { data, root } = this;
      data.expand = !data.expand;
      root.$emit('node-expand', e, deepCopy(data));
    },
    handlerClick (e) {
      const { data, root } = this;
      root.expandOnClickNode && this.handlerExpand(e);
      root.checkOnClickNode && this.handlerChecked(e);
      root.$emit('node-click', e, deepCopy(data));
    }
  }
}
</script>

<style scoped>
  .tree-ul {
    margin: 0;
    padding: 0 0 0 15px;
  }
  .tree-li {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
  }
  .tree-checkbox {
    margin: 0 0 0 4px;
    transform: translateY(1px);
  }
  .tree-content {
    width: 100%;
    margin: 0 0 0 3px;
  }
  .tree-content p {
    margin: 0;
  }
  .point {
    cursor: pointer;
  }
</style>
