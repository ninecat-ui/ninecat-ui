# Tree 树形控件
用来展示多层级数据结构, 可展开折叠, 选中, 模糊搜索, 支持作用域插槽。

## 代码演示

### 基本使用
:::demo
```html
<template>
  <n-Tree
    :data="treeList"
    :default-expand-all="true"
  />
</template>

<script>
  export default {
    data () {
      return {
        treeList: [
          {
            "id": 1007,
            "name": "山东省",
            "children": [{
              "id": 1103,
              "name": "济南市",
              "children": [{
                "id": 2544,
                "name": "济南市无影山西路店"
              }, {
                "id": 2545,
                "name": "济南市堤口路店"
              }]
            }, {
              "id": 1105,
              "name": "沂市",
              "children": [{
                "id": 2561,
                "name": "沂市东岳庙店"
              }]
            }]
          }
        ],
      }
    }
  }
</script>
```
:::

### 常用的属性和方法
:::demo
```html
<template>
  <div>
    <n-button @click="setKeys">通过key选中河南和河北</n-button>
    <n-button @click="getKeys">获取所有选中项的keys</n-button>
    <n-button @click="getNodes">获取所有选中项的nodes</n-button>
    <n-button @click="resetChecked">清空所有选中状态</n-button>
    <n-button @click="getNode">通过key获取河北省节点</n-button>
    <hr />
    <n-tree
      ref="tree"
      node-key="id"
      :data="treeList"
      :show-checkbox="true"
      :default-checked-keys="[1103]"
      :default-expanded-keys="[1103, 1105]"
      @node-click="handleClick"
    ></n-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      treeList: [
        {
          "id": 1000,
          "name": "河南省",
          "children": [{
            "id": 1009,
            "name": "新乡市",
            "children": [{
              "id": 1119,
              "name": "新乡市宏力大道店"
            }, {
              "id": 1120,
              "name": "新乡市胜利北街店"
            }, {
              "id": 1121,
              "name": "新乡市首比街店"
            }]
          },
          {
            "id": 1016,
            "name": "巩义市",
            "children": [{
              "id": 1254,
              "name": "巩义市新兴路店"
            }]
          }]
        }, {
          "id": 1001,
          "name": "河北省",
          "children": []
        }, {
          "id": 1007,
          "name": "山东省",
          "children": [{
            "id": 1103,
            "name": "济南市",
            "children": [{
              "id": 2544,
              "name": "济南市无影山西路店"
            }, {
              "id": 2545,
              "name": "济南市堤口路店"
            }]
          }, {
            "id": 1105,
            "name": "沂市",
            "children": [{
              "id": 2561,
              "name": "沂市东岳庙店"
            }]
          }]
        }, {
          "id": 1008,
          "name": "甘肃省",
          "children": [{
            "id": 1111,
            "name": "兰州市",
            "children": [{
              "id": 2649,
              "name": "兰州市金港城店"
            }, {
              "id": 2651,
              "name": "兰州市秦安路店"
            }]
          }]
        }
      ],
    }
  },
  methods: {
    setKeys () {
      this.$refs.tree.setCheckedKeys([1000, 1001], true)
    },
    getKeys () {
      const keys = this.$refs.tree.getCheckedKeys()
      console.log(keys)
    },
    getNodes () {
      const nodes = this.$refs.tree.getCheckedNodes()
      console.log(nodes)
    },
    resetChecked () {
      this.$refs.tree.resetChecked()
    },
    getNode () {
      const node = this.$refs.tree.getNode(1001)
      console.log(node)
    },
    handleClick (e, node) {
      console.log(node)
    }
  }
}
</script>
```
:::

### 模糊搜索功能
:::demo
```html
<template>
  <div>
    <n-input v-model="input" size="sm" type="text" />
    <n-tree
      node-key="id"
      :data="treeList"
      :search="input"
      :default-expand-all="true"
    ></n-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '济南无影山',
      treeList: [
        {
          "id": 1000,
          "name": "河南省",
          "children": [{
            "id": 1009,
            "name": "新乡市",
            "children": [{
              "id": 1119,
              "name": "新乡市宏力大道店"
            }, {
              "id": 1120,
              "name": "新乡市胜利北街店"
            }, {
              "id": 1121,
              "name": "新乡市首比街店"
            }]
          },
          {
            "id": 1016,
            "name": "巩义市",
            "children": [{
              "id": 1254,
              "name": "巩义市新兴路店"
            }]
          }]
        }, {
          "id": 1001,
          "name": "河北省",
          "children": []
        }, {
          "id": 1007,
          "name": "山东省",
          "children": [{
            "id": 1103,
            "name": "济南市",
            "children": [{
              "id": 2544,
              "name": "济南市无影山西路店"
            }, {
              "id": 2545,
              "name": "济南市堤口路店"
            }]
          }, {
            "id": 1105,
            "name": "沂市",
            "children": [{
              "id": 2561,
              "name": "沂市东岳庙店"
            }]
          }]
        }, {
          "id": 1008,
          "name": "甘肃省",
          "children": [{
            "id": 1111,
            "name": "兰州市",
            "children": [{
              "id": 2649,
              "name": "兰州市金港城店"
            }, {
              "id": 2651,
              "name": "兰州市秦安路店"
            }]
          }]
        }
      ],
    }
  }
}
</script>
```
:::

### 作用域插槽
:::demo
```html
<template>
  <div>
    <div style="overflow: hidden">
      <n-button @click="handleAppendRoot()" style="float: right">
        添加根节点
      </n-button>
    </div>
    <n-tree
      ref="tree"
      node-key="id"
      :data="treeList"
      :default-expand-all="true"
      :deepCopy="false"
    >
      <template slot-scope="node">
        <div style="margin: 5px">
          <span>{{node.name}}</span>
          <n-button
            @click.native.stop="handleRemove(node)"
            style="float: right"
          >删除</n-button>
          <n-button
            @click.native.stop="handleAppend(node)"
            style="float: right;margin-right: 10px"
          >添加</n-button>
        </div>
      </template>
    </n-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      treeList: [
        {
          "id": 1007,
          "name": "山东省",
          "children": [{
            "id": 1103,
            "name": "济南市",
            "children": [{
              "id": 2544,
              "name": "济南市无影山西路店"
            }, {
              "id": 2545,
              "name": "济南市堤口路店"
            }]
          }, {
            "id": 1105,
            "name": "沂市",
            "children": [{
              "id": 2561,
              "name": "沂市东岳庙店"
            }]
          }]
        }
      ],
    }
  },
  methods: {
    handleRemove (data) { // 删除节点
      this.$refs.tree.remove(data.id)
    },
    handleAppend (data) { // 添加子节点
      this.$refs.tree.append(data.id, { id: Date.now(), name: '新节点' })
    },
    handleAppendRoot () { // 添加根节点
      this.$refs.tree.append(null, { id: Date.now(), name: '新节点' })
    }
  }
}
</script>
```
:::

## 属性

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| data                  | 源数据 | Array | 必填项
| node-key              | 节点的唯一标识 | String | `'id'`
| search                | 模糊搜索的关键词 | String | `''`
| empty-text            | 内容为空时展示的文本 | String | `''`
| show-checkbox         | 是否显示checkbox | Boolean | `false`
| default-expand-all    | 是否默认展开所有节点 | Boolean | `false`
| expand-on-click-node  | 点击节点时是否展开或折叠 | Boolean | `true`
| check-on-click-node   | 点击节点时是否选中节点 | Boolean | `false`
| default-expanded-keys | 默认展开节点的keys | Array | `[]`
| default-checked-keys  | 默认选中节点的keys | Array | `[]`
| props                 | 配置选项，请看下表 | Object | ` `

## 配置项

| 参数      | 说明 | 类型
|  :--     | :-- | :--
| name     | 节点名称 | String
| children | 节点的子集 | String

## 事件

| 事件名        | 说明 | 参数
| :--- | :--- | :---
| node-click   | 节点被点击时触发 | 参数1: 事件参数event, 参数2: 当前node节点
| node-checked | 节点的选中状态改变时触发 | 参数1: 事件参数event, 参数2: 当前node节点
| node-expand  | 节点展开或折叠时触发 | 参数1: 事件参数event, 参数2: 当前node节点

## 方法

| 方法名           | 说明 | 参数 | 参数类型 | 返回值
| :--- | :--- | :--- | :--- | :---
| getNode         | 通过key获取对应节点 | 参数1: 唯一标识key | String / Number | 成功返回对应的节点, 失败返回null
| resetChecked    | 取消所有节点的选中状态 | - | - | -
| setCheckedKeys  | 通过keys批量设置节点的选中状态 | 参数1: 唯一标识keys, 参数2: 状态 | 参数1: Array, 参数2: Boolean | -
| getCheckedKeys  | 获取选中节点的keys | - | - | 所有选中节点的唯一标识keys
| getCheckedNodes  | 获取选中的节点nodes | - | - | 所有选中的节点nodes
| remove          | 通过key删除一个节点 | 参数1: 唯一标识key或当前节点 | String / Number | 成功返回true, 失败返回false
| append          | 通过key添加一个子节点 | 参数1: 唯一标识key或当前节点, 参数2: node节点 | String / Number | 成功返回true, 失败返回false
| insertBefore    | 通过key在前添加一个兄弟节点 | 参数1: 唯一标识key或当前节点, 参数2: node节点 | String / Number | 成功返回true, 失败返回false
| insertAfter     | 通过key在后添加一个兄弟节点 | 参数1: 唯一标识key或当前节点, 参数2: node节点 | String / Number | 成功返回true, 失败返回false
