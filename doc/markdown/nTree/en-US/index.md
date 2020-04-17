# Tree
It is used to display multi-level data structure, expand and collapse, select, fuzzy search, support scope slot.

## Demo

### Basic Use
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
            "name": "Shandong Province",
            "children": [{
              "id": 1103,
              "name": "Jinan City",
              "children": [{
                "id": 2544,
                "name": "West Road Store"
              }, {
                "id": 2545,
                "name": "Road Store"
              }]
            }, {
              "id": 1105,
              "name": "Yishi",
              "children": [{
                "id": 2561,
                "name": "Dongyue Temple"
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

### Commonly used attributes and methods
:::demo
```html
<template>
  <div>
    <n-button @click="setKeys">Select Henan and Hebei by key</n-button>
    <n-button @click="getKeys">Get the keys of all selected items</n-button>
    <n-button @click="getNodes">Get all the selected nodes</n-button>
    <n-button @click="resetChecked">Clear all selected states
</n-button>
    <n-button @click="getNode">Get Hebei node by key</n-button>
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
          "name": "Henan Province",
          "children": [{
            "id": 1009,
            "name": "Xin xiang",
            "children": [{
              "id": 1119,
              "name": "Xinxiang Hongli Avenue"
            }, {
              "id": 1120,
              "name": "Xinxiang City Shengli North Street Store"
            }, {
              "id": 1121,
              "name": "Xinxiang City Shoubi Street Store"
            }]
          },
          {
            "id": 1016,
            "name": "Xinxiang Hongli Avenue",
            "children": [{
              "id": 1254,
              "name": "Xinxiang City Shengli"
            }]
          }]
        }, {
          "id": 1001,
          "name": "Henan Province",
          "children": []
        }, {
          "id": 1007,
          "name": "Henan Province",
          "children": [{
            "id": 1103,
            "name": "Xinxiang",
            "children": [{
              "id": 2544,
              "name": "Xinxiang-1"
            }, {
              "id": 2545,
              "name": "Xinxiang-2"
            }]
          }, {
            "id": 1105,
            "name": "Yishi",
            "children": [{
              "id": 2561,
              "name": "Yishi-2"
            }]
          }]
        }, {
          "id": 1008,
          "name": "Ganshu",
          "children": [{
            "id": 1111,
            "name": "Lanzou",
            "children": [{
              "id": 2649,
              "name": "Lanzou-1"
            }, {
              "id": 2651,
              "name": "Lanzou-2"
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


### Scope slot
:::demo
```html
<template>
  <div>
    <div style="overflow: hidden">
      <button @click="handleAppendRoot()" style="float: right">
        Add root node
      </button>
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
          <button
            @click.native.stop="handleRemove(node)"
            style="float: right"
          >Delete</button>
          <button
            @click.native.stop="handleAppend(node)"
            style="float: right"
          >Add</button>
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
          "name": "Shandong Province",
          "children": [{
            "id": 1103,
            "name": "Jinan City",
            "children": [{
              "id": 2544,
              "name": "Jinan Wuyingshan West Road Store"
            }, {
              "id": 2545,
              "name": "Jinan City Dikou Road Store"
            }]
          }, {
            "id": 1105,
            "name": "Yishi",
            "children": [{
              "id": 2561,
              "name": "Yiyue Dongyue Temple Store"
            }]
          }]
        }
      ],
    }
  },
  methods: {
    handleRemove (data) {
      this.$refs.tree.remove(data.id)
    },
    handleAppend (data) {
      this.$refs.tree.append(data.id, { id: Date.now(), name: '新节点' })
    },
    handleAppendRoot () {
      this.$refs.tree.append(null, { id: Date.now(), name: '新节点' })
    }
  }
}
</script>
```
:::

## Attributes

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| data                  | source data | Array | Required field
| node-key              | The unique identifier of the node | String | `'id'`
| search                | Keywords for fuzzy search | String | `''`
| empty-text            | Text displayed when the content is empty | String | `''`
| show-checkbox         | Whether to show checkbox | Boolean | `false`
| default-expand-all    | Whether to expand all nodes by default | Boolean | `false`
| expand-on-click-node  | Whether to expand or collapse when clicking a node | Boolean | `true`
| check-on-click-node   | Whether to select the node when clicking it | Boolean | `false`
| default-expanded-keys | Expand the node keys by default | Array | `[]`
| default-checked-keys  | The key of the selected node by default | Array | `[]`
| props                 | For configuration options, please see the table below | Object | ` `

## Configuration item

| Property | Description | Type |
|  :--     | :-- | :--
| name     | Node name | String
| children | A subset of nodes | String

## event

| Event name        | Description | Property
| :--- | :--- | :---
| node-click   | Fires when the node is clicked | Parameter 1: Event parameter event, Parameter 2: Current node node
| node-checked | Triggered when the selected state of a node changes | Parameter 1: Event parameter event, Parameter 2: Current node node
| node-expand  | Fired when the node is expanded or collapsed | Parameter 1: Event parameter event, Parameter 2: Current node node

## Function

| Function Name           | Description | Property | Type | Retrun
| :--- | :--- | :--- | :--- | :---
| getNode         | Get the corresponding node by key | Get the corresponding node by key | String / Number | Successfully return the corresponding node, fail return null
| resetChecked    | Deselect all nodes | - | - | -
| setCheckedKeys  | Set the selected state of nodes in batches by keys | Parameter 1: Unique identification keys, Parameter 2: Status | Parameter 1: Array, Parameter 2: Boolean | -
| getCheckedKeys  | Get the keys of the selected node | - | - | The unique identification keys of all selected nodes
| getCheckedNodes  | Get the selected nodes | - | - | All selected nodes
| remove          | Delete a node by key | Parameter 1: Uniquely identify the key or current node | String / Number |Success return true, Failure returns false
| append          | Add a child node by key | Parameter 1: Uniquely identify the key or current node, Parameter 2: node | String / Number | Success return true, Failure returns false
| insertBefore    | Add a sibling node by key | Parameter 1: Uniquely identify the key or current node, Parameter 2: node | String / Number | Success return true, Failure returns false
| insertAfter     | Add a sibling node after the key | Parameter 1: Uniquely identify the key or current node, Parameter 2: node | String / Number | Success return true, Failure returns false
