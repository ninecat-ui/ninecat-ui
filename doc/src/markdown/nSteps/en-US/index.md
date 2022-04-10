# Steps
A navigation bar that guides users to complete tasks in accordance with the process.

- Steps Step bar component.
- Step Every step in the step bar.

## Examples

### Basic use

:::demo
```html
<template>
  <n-steps :active="1">
    <n-step title="Step1" description="Step1 description"/>
    <n-step title="Step2" description="Step2 description"/>
    <n-step title="Step3" description="Step3 description"/>
    <n-step title="Step4" description="Step4 description"/>
  </n-steps>
</template>

```
:::

## API

### Steps

Step bar component

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| active | Current active item | Number,String | |
| direction | Specify the direction of the step bar. Currently supports horizontal (horizontal) and vertical (vertical) two directions | String | horizontal |

### Step

Every step in the step bar

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| title | Title | String | |
| description | Detailed description of the step, optional | String |  |
