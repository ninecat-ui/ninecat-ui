### Button按钮
按钮用于开始一个即时操作。

#### 何时使用
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。


:::demo 按钮有五种类型：默认按钮、主按钮、微妙按钮、幽灵按钮、链接按钮。主按钮在同一个操作区域最多出现一次。
```html
<template>
   <n-button>Default</n-button>
    <n-button type="primary">
      Primary
    </n-button>
    <n-button type="link">
          Link
    </n-button>
    <n-button type="ghost">
          Ghost
    </n-button>
    <n-button type="delicate">
      Delicate
    </n-button>
    <n-button icon="icon-home" />
    <n-button loading />
    <n-button
      @click="handleClick"
    >
      Click
    </n-button>
    <n-button
      disabled
      @click="handleClick"
    >
      Disable
  </n-button>
</template>
<script>
export default {
  methods: {
    handleClick () {
      alert('111')
    }
  }
}
</script>

```
:::

### API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 按钮类型,可选择值`default`,`primary`,`link`,`ghost`,`delicate` | String | default |
| icon | 图标按钮,可选择就跟图标的值一样 | String |  |
| loading    | loading状态 | Boolean     | false |
| disabled    | 禁用状态 | Boolean     |  |