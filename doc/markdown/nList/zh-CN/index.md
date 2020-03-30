# List 列表
通用列表。

## 何时使用
最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

## 代码演示

### 基本使用
:::demo
```html
<template>
  <n-list :data="list"/>
</template>
<script>
  export default {
    data: function () {
      return {
        list:[
          `The shortest answer is doing.`,
          `In doing we learn.`,
          `Ninecat ui, my ui.`
        ]
      }
    }
  }
</script>
```
:::

### 尺寸
窄列表
:::demo
```html
<template>
  <n-list :data="list" size="sm"/>
</template>
<script>
  export default {
    data: function () {
      return {
        list:[
          `The shortest answer is doing.`,
          `In doing we learn.`,
          `Ninecat ui, my ui.`
        ]
      }
    }
  }
</script>
```
:::

一般列表(默认)
:::demo
```html
<template>
  <n-list :data="list" size="md"/>
</template>
<script>
  export default {
    data: function () {
      return {
        list:[
          `The shortest answer is doing.`,
          `In doing we learn.`,
          `Ninecat ui, my ui.`
        ]
      }
    }
  }
</script>
```
:::

宽列表
:::demo
```html
<template>
  <n-list :data="list" size="lg"/>
</template>
<script>
  export default {
    data: function () {
      return {
        list:[
          `The shortest answer is doing.`,
          `In doing we learn.`,
          `Ninecat ui, my ui.`
        ]
      }
    }
  }
</script>
```
:::

### 边框
:::demo
```html
<template>
  <n-list :data="list" bordered="true" />
</template>
<script>
  export default {
    data: function () {
      return {
        list:[
          `The shortest answer is doing.`,
          `In doing we learn.`,
          `Ninecat ui, my ui.`
        ]
      }
    }
  }
</script>
```
:::

### 悬停效果
:::demo
```html
<template>
  <n-list :data="list" bordered="true" hover="true"/>
</template>
<script>
  export default {
    data: function () {
      return {
        list:[
          `The shortest answer is doing.`,
          `In doing we learn.`,
          `Ninecat ui, my ui.`
        ]
      }
    }
  }
</script>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| data | 列表数组 | Array | `[]` |
| size | 尺寸大小 | String | `md` |
| bordered | 是否有边框 | [String,Boolean] | `false` |
| hover | 是否悬停效果 | [String,Boolean] | `false` |