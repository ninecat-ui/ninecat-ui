
# Loading

Used for page and block loading status.

## When To Use
When the page is partially waiting for asynchronous data or the rendering process is in progress, proper loading animation will effectively relieve the user's anxiety.

### Examples

### Basic use

:::demo A simple loading state.

```html
<template>
  <n-loader
    :show="show"
  />
</template>
<script>
  export default {
    data: function () {
      return {
        show: true,
      }
    }
  }
</script>

```
:::

### Size

:::demo You can control the size of the loading shape.

```html
<template>
  <n-loader
    size="xs"
    :show="show"
  />
  <n-loader
    size="sm"
    :show="show"
  />
  <n-loader
    size="md"
    :show="show"
  />
  <n-loader
    size="lg"
    :show="show"
  />
</template>
<script>
  export default {
    data: function () {
      return {
        show: true,
      }
    }
  }
</script>

```
:::

### Custom loading text

:::demo You can change the text description in the load.

```html
<template>
  <n-loader
    :show="show"
    loadding-text="Loading..."
  />

  <n-loader
    :show="show"
    loadding-text="Please wait..."
  />
  
</template>
<script>
  export default {
    data: function () {
      return {
        show: true,
      }
    }
  }
</script>

```
:::

### API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| show | Whether to show loading | Boolean | false |
| loadding-text | loading text | String | Loading... |
| size    | loading icon size, options: `xs`,`sm`,`md`,`lg` | String     | md |