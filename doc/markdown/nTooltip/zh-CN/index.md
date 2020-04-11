# Tooltip 文字提示
常用于展示鼠标 hover 时的提示信息。
## 何时使用
用于辅助的文字提示，可代替 HTML 元素默认的 title 属性。

## 代码演示

### 基本使用
:::demo
```html
<template>
  <n-tooltip content="Tooltip 文字提示" placement="top">
    <n-button>默认</n-button>
  </n-tooltip>
</template>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| content | 提示内容 | String |  |
| placement | 位置 | String | `top` |
| trigger | 触发事件类型 | String | `hover` |