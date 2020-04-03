
# Table
Show rows and columns of data.

## When To Use
For displaying large amounts of data.

## Examples
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
          title: 'Name',
          dataIndex: 'name',
          align: 'center',
          width: 100
        },
        {
          title: 'Age',
          dataIndex: 'age'
        },
        {
          title: 'Sex',
          dataIndex: 'sex'
        },
        {
          title: 'Address',
          dataIndex: 'address'
        }
      ],
      data: [
        { name: 'Tom', age: '11', sex: 'male', address: 'Shanghai Road' },
        { name: 'Jack', age: '12', sex: 'male', address: 'Beijing Road' },
        { name: 'Marry', age: '12', sex: 'Female', address: 'Tianjin Road' }
      ]
    }
  }
}
</script>
```
:::

### Event definition
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
          title: 'Name',
          dataIndex: 'name',
          align: 'center',
          width: 100
        },
        {
          title: 'Age',
          dataIndex: 'age'
        },
        {
          title: 'Sex',
          dataIndex: 'sex'
        },
        {
          title: 'Address',
          dataIndex: 'address'
        }
      ],
      data: [
        { name: 'Tom', age: '11', sex: 'male', address: 'Shanghai Road' },
        { name: 'Jack', age: '12', sex: 'male', address: 'Beijing Road' },
        { name: 'Marry', age: '12', sex: 'Female', address: 'Tianjin Road' }
      ]
    }
  }
}
</script>
```
:::

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| columns | row related settings |  | See the parameter description in the table below for details |
| data | table data | Array | [] |

### columns
| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| title |row name | String |  |
| dataIndex | The key of the table column data in the data item | String |  |
| align | columns alignment | String | 'left' |
| width | columns width | Number | |

### Table Events
| Event name | Description | parameter |
| :--- | :--- | :--- |
| row-click | This event is triggered when a row is double-clicked |row, event
| row-dblclick | This event is triggered when a cell is double clicked |row, event