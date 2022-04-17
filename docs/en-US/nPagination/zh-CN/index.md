
# Pagination 分页

分页导航，用于辅助长列表只加载部分数据，可以快速切换到指定数据页。

## 何时使用

当加载/渲染所有数据将花费很多时间时；可切换页码浏览数据。

## 代码演示

### 基本使用
:::demo
```html
<template>
  <n-pagination
    :total="total"
    :page-size="pageSize"
    :current="current"
    :on-change-pgae="onChangePgae"
  />
</template>

<script>
  export default {
    data: function() {
      return {
        total: 100,
        pageSize: 10,
        current: 1
      }
    },
    methods: {
      onChangePgae (page) {
        console.log(page)
      }
    }
  }
</script>
```
:::

### 尺寸大小
:::demo
```html
<template>
  <n-pagination
    size="xs"
    :total="total"
    :page-size="pageSize"
    :current="current"
  />
  <n-pagination
    size="sm"
    :total="total"
    :page-size="pageSize"
    :current="current"
  />
  <n-pagination
    size="md"
    :total="total"
    :page-size="pageSize"
    :current="current"
  />
  <n-pagination
    size="lg"
    :total="total"
    :page-size="pageSize"
    :current="current"
  />
</template>

<script>
  export default {
    data: function() {
      return {
        total: 100,
        pageSize: 10,
        current: 1
      }
    }
  }
</script>
```
:::


## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| total | 总数 | Number | 0 |
| current | 当前页码 | Number | 1 |
| page-size | 每页页数 | Number | 10 |
| size | 尺寸 | String，可选值`xs`,`sm`,`md`,`lg` | sm |
| onChangePgae | 切换页面时的回调函数 | Function| |