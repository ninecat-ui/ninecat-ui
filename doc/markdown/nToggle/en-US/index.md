
# Toggle
Toggle, used to indicate the switch status.

## When To Use
Use when you need to indicate the switch status.

## Demo
### Basic Use
:::demo

```html
<template>
  <div>
    <n-toggle v-model="isOn" />
    <n-toggle :disabled="isDisabled"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOn: true,
        isDisabled: true
      }
    }
  }
</script>
```
:::

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| checked (v-model) | Switch status (two-way binding) | Boolean | false |
| disabled | Whether to disable the switch | Boolean | false |

*Note: Please do not modify the checked attribute in the disabled state.*
