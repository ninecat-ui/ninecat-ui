
# Loading加载中

用于页面和区块的加载中状态。

## 何时使用
页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

### 代码演示

:::demo Loading加载数据时显示动效,可以的对大小进行改变。

```html
<template>
  <n-loader
    :show="show"
  />
</template>
<script>
export default {
  data: () => {
    return {
      show: true,
    }
  }
}
</script>

```
:::

### API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| show | 是否展示loading | Boolean | false |
| loaddingText | loading的文字说明 | String | Loading... |
| size    | loading图标的大小,可选值 `xs`,`sm`,`md`,`lg` | String     | md |