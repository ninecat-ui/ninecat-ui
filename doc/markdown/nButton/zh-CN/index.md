# Button 按钮
按钮用于开始一个即时操作。

## 何时使用
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 基础用法
:::demo 使用 `type`、`status`、`shape`等来定义按钮的样式。
```html
<template>
  <div>
    <n-button type="default">Default</n-button>
    <n-button type="primary">Primary</n-button>
    <n-button type="link">Link</n-button>
    <n-button type="ghost">Ghost</n-button>
    <n-button type="delicate">Delicate</n-button>
  </div>
  <div>
    <n-button type="primary" status="success">success</n-button>
    <n-button type="primary" status="info">info</n-button>
    <n-button type="primary" status="warning">warning</n-button>
    <n-button type="primary" status="danger">danger</n-button>
  </div>
  <div>
    <n-button type="primary" shape="square">square</n-button>
    <n-button type="primary" shape="square" icon="icon-search"></n-button>
    <n-button type="primary" shape="round">round</n-button>
    <n-button type="primary" shape="circle" icon="icon-home"></n-button>
  </div>
</template>
```
:::


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

### 按钮状态
:::demo 按钮有四种按钮状态：`success`、`info`、`warning`、`danger`。
```html
<template>
  <div>
    <n-button type="default" status="success">success</n-button>
    <n-button type="default" status="info">info</n-button>
    <n-button type="default" status="warning">warning</n-button>
    <n-button type="default" status="danger">danger</n-button>
  </div>
  <div>
    <n-button type="primary" status="success">success</n-button>
    <n-button type="primary" status="info">info</n-button>
    <n-button type="primary" status="warning">warning</n-button>
    <n-button type="primary" status="danger">danger</n-button>
  </div>
  <div>
    <n-button type="link" status="success">success</n-button>
    <n-button type="link" status="info">info</n-button>
    <n-button type="link" status="warning">warning</n-button>
    <n-button type="link" status="danger">danger</n-button>
  </div>
</template>
```

:::

### 按钮形状
:::demo 按钮有三种形状属性：`square`、`round`、`circle`
```html
<template>
    <n-button type="primary" shape="square">square</n-button>
    <n-button type="primary" shape="square" icon="icon-search"></n-button>
    <n-button type="primary" shape="round">round</n-button>
    <n-button type="primary" shape="circle" icon="icon-home"></n-button>
</template>
```
:::

### 按钮尺寸
:::demo 按钮有四种尺寸：`xs`、`ms`、`md`、`lg`,默认为`md`。
```html
<template>
  <n-button size="xs">
    xs
  </n-button>
  <n-button size="sm">
    sm
  </n-button>
  <n-button size="md">
    md
  </n-button>
  <n-button size="lg">
    lg
  </n-button>
</template>
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

### 加载中状态

:::demo 添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
```html
<template>
  <n-button :loading="true">loading</n-button>
</template>
```
:::

### 禁用状态

:::demo 添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
```html
<template>
  <n-button :disabled="true">disable</n-button>
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
  </n-button-group>
  <n-button-group>
    <n-button>Default 1</n-button>
    <n-button>Default 2</n-button>
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