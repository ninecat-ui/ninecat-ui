
# Loading

Used for page and block loading status.

## When To Use
When the page is partially waiting for asynchronous data or the rendering process is in progress, proper loading animation will effectively relieve the user's anxiety.

### Examples

:::demo Loading shows dynamic effects when loading data, you can change the size.

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

### API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| show | Whether to show loading | Boolean | false |
| loaddingText | loading text | String | Loading... |
| size    | loading icon size, options: `xs`,`sm`,`md`,`lg` | String     | md |