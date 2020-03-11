
# Input 输入框

用于输入文本。

## 何时使用

页面中需要有输入文本的地方使用。

## 代码演示

### 基本用法
:::demo
```html
<template>
  <n-input />
</template>
```
:::

### 尺寸大小
:::demo
```html
<template>
  <n-input style="margin: 10px auto" size="lg"/>
  <n-input style="margin: 10px auto" size="md"/>
  <n-input style="margin: 10px auto" size="sm"/>
  <n-input style="margin: 10px auto" size="xs"/>
</template>
```
:::

### 禁用

:::demo
```html
<template>
  <n-input :disabled="true"/>
</template>
```
:::


## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| size | 输入框大小，可选值`lg`,`md`,`sm`,`xs` | String | md |
| disabled | 是否禁用输入 | Boolean | false |