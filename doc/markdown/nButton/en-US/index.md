# Button
To trigger an operation.

## When To Use
A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## Examples

### Button type
:::demo There are five types of buttons: default button, home button, link button, ghost button, delicate button.
```html
<template>
   <n-button>Default</n-button>
    <n-button type="primary" @click="handleClick">
      Primary
    </n-button>
    <n-button type="link">
      Link
    </n-button>
    <n-button type="ghost">
      Ghost
    </n-button>
    <n-button type="delicate">
      Delicate
    </n-button>
</template>
<script>
export default {
  methods: {
    handleClick () {
      alert('Ninecat')
    }
  }
}
</script>

```
:::

### Icon button

:::demo When you need to embed an Icon in a Button, you can set the icon property or use the Icon component directly in the Button.
```html
<template>
   <n-button icon="icon-home" />
   <n-button><n-icon name="icon-home" /></n-button>
   <n-button icon="icon-home" type="primary"/>
   <n-button icon="icon-home" type="link"/>
</template>
```
:::


### Button combinations

:::demo You can put multiple Buttons in a n-button-group container.
```html
<template>
  <n-button-group>
    <n-button type="primary">Primary 1</n-button>
    <n-button type="primary">Primary 2</n-button>
  </n-button-group>
  <n-button-group>
    <n-button>Default 1</n-button>
    <n-button>Default 2</n-button>
  </n-button-group>
</template>
```
:::


### API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| type | can be set to `default`,`primary`,`link`,`ghost`,`delicate` | String | default |
| icon | Icon button, selectable just like the value of the icon | String |  |
| loading    | set the loading status of button | Boolean     | false |
| disabled    | disabled state of button | Boolean     |  |