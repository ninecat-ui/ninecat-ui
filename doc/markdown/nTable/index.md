
# Table组件
展示行列数据。

## 何时使用
展示大量数据用。

### 代码演示
:::demo

```html
<template>
  <div>
    <n-table
      :columns="columns"
      :data="data"
    />
  </div>
</template>
<script>
export default {
  data:  function () {
    return {
      columns: [
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
      data: [
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

### API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| columns | 行相关设置 |  | 具体见下表的参数说明 |
| data | table表格数据 | Array | [] |

#### columns
| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 行名称 | String |  |
| dataIndex | table列数据在数据项中对应的 key | String |  |
| align | 居中方式 | String | 'left' |
| width | 宽度 | Number | |