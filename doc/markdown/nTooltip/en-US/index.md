# Tooltip
Commonly used to display the prompt information when the mouse hover.
## When To Use
Used for auxiliary text prompts, which can replace the default title attribute of HTML elements.

## Examples

### Basic Use
:::demo
```html
<template>
  <n-tooltip content="Tooltip some content" placement="top">
    <n-button>Default</n-button>
  </n-tooltip>
</template>
```
:::

## API
| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| content | Tooltip content | String |  |
| placement | position | String | `top` |
| trigger | Trigger event type | String | `hover` |