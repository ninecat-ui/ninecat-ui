
# Loading 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码演示

:::demo 加载数据时显示动效，可以对大小进行改变。

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

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| show | 是否展示加载中图标 | Boolean | false |
| loaddingText | 文字说明 | String | Loading... |
| size    | 图标的大小，可选值 `xs`,`sm`,`md`,`lg` | String     | md |