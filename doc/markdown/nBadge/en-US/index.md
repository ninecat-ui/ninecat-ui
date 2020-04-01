
# Badge

Used for remind.

## When To Use

Use it where you need news to remind.

## Examples

### Basic use
:::demo
```html
<template>
  <n-badge>
    <n-button>New Message</n-button>
  </n-badge>
</template>
```
:::

### Custom content
:::demo
```html
<template>
  <n-badge content="99+">
    <n-button>New Message</n-button>
  </n-badge>
</template>
```
:::

### Use alone
:::demo
```html
<template>
  <n-badge content="99+" />
</template>
```
:::

### API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| content | content | String,Number |  |