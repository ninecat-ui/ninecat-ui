# Button 按钮
按钮用于开始一个即时操作。

## 何时使用
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 按钮类型
:::demo 按钮有五种类型：默认按钮、主按钮、链接按钮、幽灵按钮、微妙按钮。
```html
<template>
  <n-button type="default">
    Default
  </n-button>
  <n-button type="primary" @click="handleClick">
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
</template>

<script>
export default {
  methods: {
    handleClick () {
      alert('Ninecat')
    }
  }
}
</script>

```
:::

### 图标按钮

:::demo 当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。
```html
<template>
  <n-button><n-icon name="icon-home" /></n-button>
  <n-button icon="icon-home" type="primary"/>
</template>
```
:::


### 按钮组合

:::demo 可以将多个 Button 放入 n-button-group 容器中。
```html
<template>
  <n-button-group>
    <n-button type="primary">Primary 1</n-button>
    <n-button type="primary">Primary 2</n-button>
    <n-button type="primary">Primary 3</n-button>
  </n-button-group>
  <n-button-group>
    <n-button>Default 1</n-button>
    <n-button>Default 2</n-button>
    <n-button>Default 3</n-button>
  </n-button-group>
</template>
```
:::


## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 按钮类型，可选择值`default`,`primary`,`link`,`ghost`,`delicate` | String | default |
| icon | 图标按钮，可选择和图标的值一样 | String |  |
| loading    | 是否为加载状态 | Boolean     | false |
| disabled    | 禁用状态 | Boolean     | false |