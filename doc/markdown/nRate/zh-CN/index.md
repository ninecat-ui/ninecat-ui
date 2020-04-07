# Rate 评分
评分组件

## 何时使用
当网页需要评价打分是使用

## 代码演示

### 基本使用

:::demo
```html
<template>
  <n-rate :value="value1"/>
  <n-rate :value="value2" :max="max"/>
</template>
<script>
  export default {
    data: function () {
      return {
        value1: 3,
        value2: 7,
        max: 10
      }
    }
  }
</script>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| value | 绑定值 | Number,String | 0 |
| max | 最大分值 | Number,String | 5 |