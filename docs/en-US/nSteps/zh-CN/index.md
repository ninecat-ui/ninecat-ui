# Steps 步骤条
引导用户按照流程完成任务的导航条。

- Steps 步骤条组件
- Step 步骤条内的每一个步骤。

## 代码演示

### 基本使用

:::demo
```html
<template>
  <n-steps :active="1">
    <n-step title="步骤1" description="步骤1描述"/>
    <n-step title="步骤2" description="步骤2描述"/>
    <n-step title="步骤3" description="步骤3描述"/>
    <n-step title="步骤4" description="步骤4描述"/>
  </n-steps>
</template>

```
:::

### 垂直方向的步骤

:::demo
```html
<template>
  <n-steps :active="2" :vertical="true">
    <n-step title="步骤1" description="步骤1描述"/>
    <n-step title="步骤2" description="步骤2描述"/>
    <n-step title="步骤3" description="步骤3描述"/>
    <n-step title="步骤4" description="步骤4描述"/>
  </n-steps>
</template>

```
:::

## API

### Steps

整体步骤条。

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| active | 当前活动值 | Number,String | |
| vertical | 是否竖直方向选项，目前支持水平（horizontal）和竖直（vertical）两种方向 | String |  |

### Step

步骤条内的每一个步骤。

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 标题 | String | |
| description | 步骤的详情描述，可选 | String |  |
