# Rate
Rate component

## When To Use
Use when the webpage needs to be rated

## Examples

### Basic use

:::demo
```html
<template>
  <n-rate :value="value1"/>
  <n-rate :value="value2" :max="max"/>
</template>
<script>
  export default {
    data: function () {
      return {
        value1: 3,
        value2: 7,
        max: 10
      }
    }
  }
</script>
```
:::

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| value | v-model value | Number,String | 0 |
| max | Maximum score  | Number,String | 5 |