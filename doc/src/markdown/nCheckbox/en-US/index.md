# Checkbox(developing)

Checkbox


## When To Use
Used for selecting multiple values from several options.

If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.

## Examples
### Basice Use
Easy checkbox
:::demo
```html
<template>
  <n-checkbox :checked="true">Checkbox</n-checkbox>
</template>

```
:::

### Disabled
checkbox Disabled.
:::demo
```html
<template>
  <n-checkbox :disabled="true" :checked="true">Checkbox</n-checkbox>
  <n-checkbox :disabled="true" :checked="false">Checkbox</n-checkbox>
</template>

```
:::

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| checked | is checked | Boolean | false |
| defaultChecked | defaultChecked | Boolean | false |
| disabled    | disabled | Boolean  | false |
| onChange    | onChange | Function     |  |