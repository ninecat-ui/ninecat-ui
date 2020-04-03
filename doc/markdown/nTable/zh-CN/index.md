
# Table 表格
展示行列数据。

## 何时使用
展示大量数据时使用。

## 代码演示
### 基本使用
:::demo

```html
<template>
  <div>
    <n-table
      :columns="tableColumns"
      :data="tableData"
    />
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        tableColumns: [
          {
            title: '姓名',
            dataIndex: 'name',
            align: 'center',
            width: 100
          },
          {
            title: '年龄',
            dataIndex: 'age'
          },
          {
            title: '性别',
            dataIndex: 'sex'
          },
          {
            title: '住址',
            dataIndex: 'address'
          }
        ],
        tableData: [
          { name: '张三', age: '11', sex: '男', address: '上海路' },
          { name: '李四', age: '12', sex: '男', address: '北京路' },
          { name: '李花', age: '12', sex: '女', address: '天津路' }
        ]
      }
    }
  }
</script>
```
:::

### 事件定义
:::demo

```html
<template>
  <div>
    <n-table
      :columns="tableColumns"
      :data="tableData"
      :row-click="rowClick"
      :row-dbclick="rowDbclick"
    />
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        tableColumns: [
          {
            title: '姓名',
            dataIndex: 'name',
            align: 'center',
            width: 100
          },
          {
            title: '年龄',
            dataIndex: 'age'
          },
          {
            title: '性别',
            dataIndex: 'sex'
          },
          {
            title: '住址',
            dataIndex: 'address'
          }
        ],
        tableData: [
          { name: '张三', age: '11', sex: '男', address: '上海路' },
          { name: '李四', age: '12', sex: '男', address: '北京路' },
          { name: '李花', age: '12', sex: '女', address: '天津路' }
        ]
      }
    },
    methods: {
      rowClick(item,e){
        console.log('rowClick')
        console.log(item,e)
      },
      rowDbclick(item,e){
        console.log('rowDbclick')
        console.log(item,e)
      }
    }
  }
</script>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| columns | 表头相关设置 | Array，具体见下表的参数说明 |  |
| data | 表格数据 | Array | [] |

### columns
| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 列名称 | String |  |
| dataIndex | 列在 data 中的 key | String |  |
| align | 对齐方式，可选`left`,`center`,`right` | String | left |
| width | 宽度（px） | Number | |

### Table Events
| 事件名 | 说明 | 参数 |
| :--- | :--- | :--- |
| row-click | 当某一行被双击时会触发该事件 |row, event
| row-dblclick | 当某个单元格被双击击时会触发该事件 |row, event