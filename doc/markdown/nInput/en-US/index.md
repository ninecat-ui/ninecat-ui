
# Input

Used for input.

## When To Use

Use it where you need input.

### Examples

#### Basic use
:::demo
```html
<template>
  <n-input />
</template>
```
:::

#### Size
:::demo
```html
<template>
  <div class="example-input">
     <n-input size="lg"/>
  </div>
  <div class="example-input">
    <n-input size="md"/>
  </div>
  <div class="example-input">
    <n-input size="sm"/>
  </div>
  <div class="example-input">
    <n-input size="xs"/>
  </div>
</template>
```
:::

#### Disabled

:::demo
```html
<template>
  <n-input :disabled="true"/>
</template>
```
:::

### API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| size | Input box size | String | md |
| disabled | Whether the input is disabled. | Boolean | false |