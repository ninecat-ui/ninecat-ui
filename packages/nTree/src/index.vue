<template>
  <div class="n-tree">
    <node
      v-for="item of deepData"
      :key="item[nodeKey]"
      :data="item"
    />
  </div>
</template>

<script>
import { computSortNum, getSortData, getDictionary, deepCopy } from './utils.js';
import node from './node.vue';
export default {
  name: 'NTree',
  components: { node },
  props: {
    data: {
      type: Array,
      required: true,
      default: function () {
        return [];
      }
    },
    nodeKey: {
      type: String,
      default: 'id'
    },
    search: {
      type: String,
      default: ''
    },
    emptyText: {
      type: String,
      default: ''
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    checkOnClickNode: {
      type: Boolean,
      default: false
    },
    defaultExpandedKeys: {
      type: Array,
      default: () => []
    },
    defaultCheckedKeys: {
      type: Array,
      default: () => []
    },
    props: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data () {
    return {
      deepData: '',
      isTree: true,
      defaultProps: {}
    };
  },
  computed: {
    _search () {
      return this.search.trim();
    },
    sourceData () {
      return deepCopy(this.data);
    }
  },
  watch: {
    sourceData () {
      this._initData();
    },
    _search () {
      this.deepData = this._getLdqTree(this.deepData);
    }
  },
  created () {
    this.defaultProps = {
      name: this.props.name || 'name',
      children: this.props.children || 'children',
      disabled: this.props.disabled || 'disabled'
    };
    this._initData();
  },
  methods: {
    _initNode (node, parent) {
      const { name, children } = this.defaultProps;
      const key = node[this.nodeKey];
      this.$set(node, name, node[name] || this.emptyText);
      this.$set(node, children, node[children] || []);
      this.$set(node, 'level', parent ? ~~parent.level + 1 : 1);
      this.$set(node, 'checked', Reflect.has(node, 'checked') ? node.checked : this.defaultCheckedKeys.indexOf(key) > -1);
      this.$set(node, 'expand', Reflect.has(node, 'expand') ? node.expand : this.defaultExpandAll || this.defaultExpandedKeys.indexOf(key) > -1);
      this.$set(node, '$keys', []);
      this.$set(node, '$sort', 0);
    },
    _initData () { // 初始化数据
      const { children } = this.defaultProps;
      const _deep = (arr, parent) => {
        arr.forEach(item => {
          this._initNode(item, parent);
          item[children] && item[children].length && _deep(item[children], item);
          item.expand && parent && (parent.expand = true);
        });
      };
      _deep(this.sourceData);
      this.deepData = this._getLdqTree(deepCopy(this.sourceData));
    },
    _getLdqTree (tree) { // 获取关键词索引并排序
      const { name, children } = this.defaultProps;
      tree.forEach(item => {
        const keys = getDictionary(item[name], this._search);
        item.$keys = keys;
        item.$sort = computSortNum(keys);
        if (item[children].length) item[children] = this._getLdqTree(item[children]);
        item.$sort += item[children].reduce((max, item) => max > item.$sort ? max : item.$sort, 0);
      });
      return getSortData(tree);
    },
    _preorder (arr, callback) { // 前序迭代遍历
      if (!arr.length) return null;
      const { children } = this.defaultProps;
      let stack = [...arr];
      while (stack.length) {
        const curr = stack.shift();
        if (callback(curr)) return curr;
        if (curr[children] && curr[children].length) stack.unshift(...curr[children]);
      }
      return null;
    },
    _downwardUpdateChecked (data) {
      const { children } = this.defaultProps;
      data[children].forEach(item => {
        item.checked = data.checked;
        this._downwardUpdateChecked(item);
      });
    },
    ininData () { // 向外暴露一个初始化数据的方法
      this.deepData = this._getLdqTree(deepCopy(this.sourceData));
    },
    getNode (key) { // 根据key获取对应深拷贝节点
      return deepCopy(this._getNode(key));
    },
    _getNode (key) { // 根据key获取对应引用节点
      return this._preorder(this.deepData, item => String(item[this.nodeKey]) === String(key));
    },
    resetChecked () { // 取消所有节点的选中状态
      return !this._preorder(this.deepData, item => !!this.$set(item, 'checked', false));
    },
    setCheckedKeys (keys, checked) { // 设置指定keys节点的checked
      keys = deepCopy(keys);
      this._preorder(this.deepData, item => {
        let index = keys.indexOf(item[this.nodeKey]);
        if (index === -1) return false;
        item.checked = checked;
        this._downwardUpdateChecked(item);
        keys.splice(index, 1);
        return !keys.length;
      });
    },
    getCheckedKeys () { // 获取所有选中节点的keys
      const keys = [];
      this._preorder(this.deepData, item => item.checked && !keys.push(item[this.nodeKey]));
      return keys;
    },
    getCheckedNodes () { // 获取所有选中节点的nodes
      const nodes = [];
      this._preorder(this.deepData, item => item.checked && !nodes.push(item));
      return deepCopy(nodes);
    },
    remove (key) { // 删除指定的节点
      const curr = this._getNode(key);
      if (!curr) return !!console.warn('该节点不存在');
      const arr = curr.$pid ? this._getNode(curr.$pid)[this.defaultProps.children] : this.deepData;
      arr.splice(arr.findIndex(item => item === curr), 1);
      return true;
    },
    append (key, node) { // 添加新的子节点
      const nodeKey = node[this.nodeKey];
      if (!nodeKey) return !!console.warn('新节点没有node-key');
      if (key === null) {
        this._initNode(node, null);
        this.deepData.push(node);
        return true;
      }
      if (this._getNode(nodeKey)) return !!console.warn('请勿重复添加新节点, node-key已存在');
      const curr = this._getNode(key);
      if (!curr) return !!console.warn('该节点不存在');
      this._initNode(node, curr);
      curr[this.defaultProps.children].push(node);
      return true;
    },
    insertBefore (key, node) { // 向前添加兄弟节点
      const nodeKey = node[this.nodeKey];
      if (!nodeKey) return !!console.warn('新节点没有node-key');
      if (this._getNode(nodeKey)) return !!console.warn('请勿重复添加新节点, node-key已存在');
      const curr = this._getNode(key);
      if (!curr) return !!console.warn('该节点不存在');
      this._initNode(node, curr.$pid);
      const arr = curr.$pid ? this._getNode(curr.$pid)[this.defaultProps.children] : this.deepData;
      arr.splice(arr.findIndex(item => item === curr), 0, node);
      return true;
    },
    insertAfter (key, node) { // 向后添加兄弟节点
      const nodeKey = node[this.nodeKey];
      if (!nodeKey) return !!console.warn('新节点没有node-key');
      if (this._getNode(nodeKey)) return !!console.warn('请勿重复添加新节点, node-key已存在');
      const curr = this._getNode(key);
      if (!curr) return !!console.warn('该节点不存在');
      this._initNode(node, curr.$pid);
      const arr = curr.$pid ? this._getNode(curr.$pid)[this.defaultProps.children] : this.deepData;
      arr.splice(arr.findIndex(item => item === curr) + 1, 0, node);
      return true;
    }
  }
};
</script>

<style scoped>
  .n-tree {
    user-select: none;
  }
</style>
