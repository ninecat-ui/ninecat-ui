
# Loading 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码演示

### 基本用法

:::demo 一个简单的loading状态。

```html
<template>
  <n-loader
    :show="show"
  />
</template>
<script>
  export default {
    data: function () {
      return {
        show: true,
      }
    }
  }
</script>

```
:::

### 各种大小

:::demo 可以对loading的形状大小进行控制。

```html
<template>
  <n-loader
    size="xs"
    :show="show"
  />
  <n-loader
    size="sm"
    :show="show"
  />
  <n-loader
    size="md"
    :show="show"
  />
  <n-loader
    size="lg"
    :show="show"
  />
</template>
<script>
  export default {
    data: function () {
      return {
        show: true,
      }
    }
  }
</script>

```
:::

### 自定义加载文案

:::demo 可以对加载中的文字描述进行更改。

```html
<template>
  <n-loader
    :show="show"
    loadding-text="加载中..."
  />

  <n-loader
    :show="show"
    loadding-text="请等待..."
  />
  
</template>
<script>
  export default {
    data: function () {
      return {
        show: true,
      }
    }
  }
</script>

```
:::


## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| show | 是否展示加载中图标 | Boolean | false |
| loadding-text | 文字说明 | String | Loading... |
| size    | 图标的大小，可选值 `xs`,`sm`,`md`,`lg` | String     | md |