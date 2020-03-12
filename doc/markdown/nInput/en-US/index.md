
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
  <n-input class="example-input" size="lg"/>
  <n-input class="example-input" size="md"/>
  <n-input class="example-input" size="sm"/>
  <n-input class="example-input" size="xs"/>
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