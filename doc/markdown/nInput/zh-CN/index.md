
# Input 输入框

用于输入文本。

## 何时使用

页面中需要有输入文本的地方使用。

## 代码演示

### 基本使用
:::demo
```html
<template>
  <n-input placeholder="请输入"/>
</template>
```
:::

### 尺寸大小
:::demo
```html
<template>
  <div class="example-input">
     <n-input placeholder="请输入" size="lg"/>
  </div>
  <div class="example-input">
    <n-input placeholder="请输入" size="md"/>
  </div>
  <div class="example-input">
    <n-input placeholder="请输入" size="sm"/>
  </div>
  <div class="example-input">
    <n-input placeholder="请输入" size="xs"/>
  </div>
</template>
```
:::

### 禁用

:::demo
```html
<template>
  <n-input :disabled="true" placeholder="请输入"/>
</template>
```
:::

### 绑定事件

:::demo
```html
<template>
  <n-input @change="handChange"  placeholder="请输入"/>
</template>
<script>
  export default {
    methods: {
      handChange(event){
        console.log(event)
      }
    }
  }
</script>
```
:::


## API

### Input

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| size | 输入框大小，可选值`lg`,`md`,`sm`,`xs` | String | md |
| placeholder | 输入框占位文本 | String |  |
| disabled | 是否禁用输入 | Boolean | false |

### Input Events

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- | :--- |
|input|	在输入时触发|	(event: Event)
|blur|	在 Input 失去焦点时触发|	(event: Event)
|focus|	在 Input 获得焦点时触发|	(event: Event)
|change	|仅在输入框失去焦点时触发|	(event: Event)