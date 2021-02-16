<script>
import ZCheckbox from './z-checkbox.vue';
import { deepCopy } from './utils.js';
export default {
  name: 'Node',
  components: { ZCheckbox },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      root: null,
      children: []
    };
  },
  created () {
    const { data, $parent } = this;
    this.root = $parent.isTree ? $parent : $parent.root;
    this.$set(data, '$pid', $parent.isTree ? null : $parent.data[this.root.nodeKey]);
  },
  methods: {
    _upwardUpdateChecked (checked) {
      const { data, root } = this;
      const { children } = root.defaultProps;
      let oneNodeIsIndeterminate = false;
      const len = data[children].length;
      // 获取所有选中节点的数量
      const checkedNum = data[children].reduce((num, item) => {
        if (item.indeterminate) oneNodeIsIndeterminate = true;
        return (num += +item.checked);
      }, 0);
      // 所有节点都被选中时checked=true, 反之false
      data.checked = checkedNum === len;
      // 如果全部节点都选中了, 那么indeterminate必然等于false, 否则就看子节点是否有半选节点, 再看子节点是否有0个未选中
      data.indeterminate = checkedNum === len ? false : (oneNodeIsIndeterminate || !!checkedNum);
      this.$emit('check-change', data.checked);
    },
    handlerChecked (e) {
      const { data, root } = this;
      const { children, disabled } = root.defaultProps;
      if (data[disabled]) return false;
      let checked = !data.checked;
      // 过滤所有disabled=false的叶子节点, 如果有没选中的就重写checked
      data[children].length && checked && (
        checked = !!root._levelOrder(data[children], item => !item[disabled] && !item.checked)
      );
      // 必须先向下改变状态
      root._downwardUpdateChecked(data, checked);
      // 再向上逐级传递状态
      this.$emit('check-change', checked);
      root.$emit('node-checked', e, deepCopy(data));
    },
    handlerExpand (e) {
      const { data, root } = this;
      if (!data.children.length) return false;
      data.expand = !data.expand;
      root.$emit('node-expand', e, deepCopy(data));
    }
  },
  render () {
    const { data, root } = this;
    const { name, children, disabled } = root.defaultProps;
    const hideMisses = root.filterNode(deepCopy(data)) && (!root.hideMisses || data.visible);
    return hideMisses
      ? <ul class="tree-ul">
      <li class="tree-li">
        <svg t="1585220115926" class="tree-icon point" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2222" width="10" height="10" style={{
          transform: `rotate(${data.expand ? '0' : '-90'}deg)`,
          visibility: data[children].length ? 'visible' : 'hidden'
        }} onClick={e => this.handlerExpand(e)}>
          <path d="M151.476947 199.553918l718.53082 0c39.763632 0 71.922053 31.909757 71.922053 71.675436 0 18.485003-7.095605 35.205826-18.486026 47.872311L568.114019 793.227056c-23.810289 31.400151-68.641333 37.993313-100.29731 14.183024-5.570879-4.052293-10.384511-8.873088-14.183024-14.190187L94.235245 314.041416c-23.547299-31.407314-17.217127-76.479859 14.436804-100.041484 12.922311-9.881045 27.864628-14.43885 42.804898-14.43885l0 0L151.476947 199.553918zM151.476947 199.553918" p-id="2223" fill="#c0c4cc"></path>
        </svg>
        {
          root.showCheckbox && <zCheckbox
            theme-color={root.themeColor}
            value={data.checked}
            disabled={data[disabled]}
            indeterminate={data.indeterminate}
            onClick={e => this.handlerChecked(e)}
          ></zCheckbox>
        }
        <div class="tree-content point" onClick={e => {
          root.expandOnClickNode && this.handlerExpand(e);
          root.checkOnClickNode && this.handlerChecked(e);
          root.$emit('node-click', e, deepCopy(data));
        }}>
          {
            root.$scopedSlots.default
              ? root.$scopedSlots.default(data)
              : <p class="tree-text">
              {
                data.$keys.length
                  ? data[name].split('').map((curr, i) => {
                    return <span class={ data.$keys.includes(i) ? 'red' : 'gary' }>{curr}</span>;
                  })
                  : <span class="gary">{data[name]}</span>
              }
            </p>
          }
        </div>
      </li>
      {
        !!data[children].length && data.expand && <div>
          {
            data[children].map(item => <node
              key={item[root.nodeKey]}
              data={item}
              onCheck-change={this._upwardUpdateChecked}
            ></node>)
          }
        </div>
      }
    </ul>
      : null;
  }
};
</script>

<style scoped>
  .tree-ul {
    margin: 0;
    padding: 0 0 0 17px;
  }
  .tree-li {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    transform: translate(0);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tree-content {
    width: 100%;
    margin: 0 0 0 3px;
  }
  .tree-content p {
    margin: 0;
  }
  .tree-text {
    margin: 0;
  }
  .point {
    cursor: pointer;
  }
  .red {
    color: red;
  }
  .gary {
    color: gray;
  }
</style>
