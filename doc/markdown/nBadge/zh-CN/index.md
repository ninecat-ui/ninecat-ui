
# Badge 标记

标记用于新消息提示。

## 何时使用

有新消息需要提示的场景。

## 代码演示

:::demo
```html
<template>
  <n-badge type="default">99+</n-badge>
  <n-badge type="new">New</n-badge>
  <n-badge type="small" />
</template>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 标记类型,可选择值`default`,`new`,`small` | String | default |