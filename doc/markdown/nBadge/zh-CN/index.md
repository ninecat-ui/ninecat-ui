
# Badge 标记

标记用于新消息提示。

## 何时使用

有新消息需要提示的场景。

## 代码演示

### 基本使用
:::demo
```html
<template>
  <n-badge>
    <n-button>新消息</n-button>
  </n-badge>
</template>
```
:::

### 自定义内容
:::demo
```html
<template>
  <n-badge content="99+">
    <n-button>新消息</n-button>
  </n-badge>
</template>
```
:::

### 单独使用
:::demo
```html
<template>
  <n-badge content="99+" />
</template>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| content | 内容 | String,Number |  |