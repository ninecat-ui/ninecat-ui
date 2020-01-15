
# 信息提示Message

用于页面信息提示。

## 何时使用

页面中需要有操作提示或者信息提示的时候使用。

### 代码演示

:::demo
```html
<template>
  <n-message
    :show="show"
    :type="infoType"
    :message="infoMessage"
  />
</template>
<script>
export default {
  data: () => {
    return {
      show: true,
      infoType: 'info',
      infoMessage: '一般的文字信息，默认左对齐，可以带图标。',
    }
  }
}
</script>
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| show | 是否展示信息提示 | Boolean | false |
| infoType | 信息类型,可选值`info`,`success`,`warning`,`error` | String | info |
| message    | 信息内容 | String     |  |