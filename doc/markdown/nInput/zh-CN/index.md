
# 输入框Input

用于输入。

## 何时使用

页面中需要有输入的地方使用。

### 代码演示

#### 基本用法
:::demo
```html
<template>
  <n-input />
</template>
```
:::

#### 尺寸大小
:::demo
```html
<template>
  <n-input class="example-input" size="lg"/>
  <n-input class="example-input" size="md"/>
  <n-input class="example-input" size="sm"/>
  <n-input class="example-input" size="xs"/>
</template>
```
:::

#### 禁用

:::demo
```html
<template>
  <n-input :disabled="true"/>
</template>
```
:::


### API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| size | input输入框大小 | String | md |
| disabled | 是否可输入 | Boolean | false |