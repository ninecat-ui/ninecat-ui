# Checkbox多选框(开发中)

多选框。

# 何时使用
在一组可选项中进行多项选择时；单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示
### 基本使用
最简单的checkbox
:::demo
```html
<template>
  <n-checkbox :checked="true">Checkbox</n-checkbox>
</template>

```
:::

### 不可用
checkbox 不可用。
:::demo
```html
<template>
  <n-checkbox :disabled="true" :checked="true">Checkbox</n-checkbox>
  <n-checkbox :disabled="true" :checked="false">Checkbox</n-checkbox>
</template>

```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| checked | 是否选中 | Boolean | false |
| defaultChecked | 初始是否选中 | Boolean | false |
| disabled    | 失效状态 | Boolean  | false |
| onChange    | 变化时回调函数 | Function     |  |