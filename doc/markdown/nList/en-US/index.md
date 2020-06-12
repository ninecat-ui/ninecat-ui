# List
General list.

## When To Use
The most basic list display can carry text, lists, pictures, paragraphs, and is often used for background data display pages.

## Examples

### Basic Use
:::demo
```html
<template>
  <n-list :data="list"/>
</template>
<script>
  export default {
    data: function () {
      return {
        list:[
          `The shortest answer is doing.`,
          `In doing we learn.`,
          `Ninecat ui, my ui.`
        ]
      }
    }
  }
</script>
```
:::

### Size
Small
:::demo
```html
<template>
  <n-list :data="list" size="sm"/>
</template>
<script>
  export default {
    data: function () {
      return {
        list:[
          `The shortest answer is doing.`,
          `In doing we learn.`,
          `Ninecat ui, my ui.`
        ]
      }
    }
  }
</script>
```
:::

Middle
:::demo
```html
<template>
  <n-list :data="list" size="md"/>
</template>
<script>
  export default {
    data: function () {
      return {
        list:[
          `The shortest answer is doing.`,
          `In doing we learn.`,
          `Ninecat ui, my ui.`
        ]
      }
    }
  }
</script>
```
:::

Large
:::demo
```html
<template>
  <n-list :data="list" size="lg"/>
</template>
<script>
  export default {
    data: function () {
      return {
        list:[
          `The shortest answer is doing.`,
          `In doing we learn.`,
          `Ninecat ui, my ui.`
        ]
      }
    }
  }
</script>
```
:::

### Bordered
:::demo
```html
<template>
  <n-list :data="list" bordered="true" />
</template>
<script>
  export default {
    data: function () {
      return {
        list:[
          `The shortest answer is doing.`,
          `In doing we learn.`,
          `Ninecat ui, my ui.`
        ]
      }
    }
  }
</script>
```
:::

### Hover
:::demo
```html
<template>
  <n-list :data="list" bordered="true" hover="true"/>
</template>
<script>
  export default {
    data: function () {
      return {
        list:[
          `The shortest answer is doing.`,
          `In doing we learn.`,
          `Ninecat ui, my ui.`
        ]
      }
    }
  }
</script>
```
:::

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| data | List array | Array | `[]` |
| size | The List Size | String | `md` |
| bordered | Has border | [String,Boolean] | `false` |
| hover | Whether to hover effect | [String,Boolean] | `false` |