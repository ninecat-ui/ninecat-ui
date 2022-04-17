# Tooltip
Commonly used to display the prompt information when the mouse hover.
## When To Use
Used for auxiliary text prompts, which can replace the default title attribute of HTML elements.

## Examples

### Basic Use
:::demo
```html
<template>
  <div class="tooltip-example">
    <div class="top">
      <n-tooltip class="item" content="Some content" placement="top">
        <n-button>Top</n-button>
      </n-tooltip>
    </div>
    <div class="left">
      <n-tooltip class="item" content="Some content" placement="left" trigger="click">
        <n-button>Left</n-button>
      </n-tooltip>
    </div>
    <div class="right">
      <n-tooltip class="item" content="Some content" placement="right" trigger="click">
        <n-button>Right</n-button>
      </n-tooltip>
    </div>
    <div class="bottom">
      <n-tooltip class="item" content="Some content" placement="bottom">
        <n-button>Bottom</n-button>
      </n-tooltip>
    </div>
  </div>
</template>
```
:::

## API
| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| content | Tooltip content | String |  |
| placement | position | String | `top` |
| trigger | Trigger event type | String | `hover` |