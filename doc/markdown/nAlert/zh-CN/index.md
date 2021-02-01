
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
      v-model:show="show1"
      message="Message"
      type="info"
    />
    <n-alert
      v-model:show="show2"
      message="Message"
      type="success"
    />
    <n-alert
      v-model:show="show3"
      message="Message"
      type="warning"
    />
    <n-alert
      v-model:show="show4"
      message="Message"
      type="error"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
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
