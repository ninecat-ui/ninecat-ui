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

### 基本使用
:::demo
```html

```
:::

## 属性

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |

## 回调

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |

## 事件

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
