
# Input

Used for input.

## When To Use

Use it where you need input.

## Examples

### Basic use
:::demo
```html
<template>
  <n-input placeholder="Please input"/>
</template>
```
:::

### Size
:::demo
```html
<template>
  <div class="example-input">
     <n-input size="lg" placeholder="Please input"/>
  </div>
  <div class="example-input">
    <n-input size="md" placeholder="Please input"/>
  </div>
  <div class="example-input">
    <n-input size="sm" placeholder="Please input"/>
  </div>
  <div class="example-input">
    <n-input size="xs" placeholder="Please input"/>
  </div>
</template>
```
:::

### Disabled

:::demo
```html
<template>
  <n-input :disabled="true" placeholder="Please input" />
</template>
```
:::

### Input Events

:::demo
```html
<template>
  <n-input @change="handChange"  placeholder="Please input"/>
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
| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| size | Input box size | String | md |
| placeholder | Input box placeholder text | String |  |
| disabled | Whether the input is disabled. | Boolean | false |

### Input Events

| Event name | Description | Callback parameter |
| :--- | :--- | :--- | :--- |
|input|	Trigger on input|	(event: Event)
|blur|	Fires when Input loses focus|	(event: Event)
|focus|	Fires when Input receives focus|	(event: Event)
|change	|Only fires when the input box loses focus|	(event: Event)