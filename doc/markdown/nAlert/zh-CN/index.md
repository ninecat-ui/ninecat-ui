
# Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

当某个页面需要向用户显示警告的信息时。
 
## 代码演示
:::demo
```html
<template>
  <div >
    <n-alert
      :show="show"
      message="Message"
      type="info"
    />
    <n-alert
      :show="show"
      message="Message"
      type="success"
    />
    <n-alert
      :show="show"
      message="Message"
      type="warning"
    />
    <n-alert
      :show="show"
      message="Message"
      type="error"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: true
    }
  }
}
</script>

```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| show | 是否展示 | Boolean | false |
| message | 提示内容 | String |  |
| type    | 提示类型，可选值`info`,`success`,`warning`,`error` | String | info |
