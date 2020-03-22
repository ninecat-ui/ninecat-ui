
# Alert

Alert component for feedback.

## When To Use

When you need to show alert messages to users.

## Examples
:::demo
```html
<template>
  <div >
    <n-alert
      :show="show"
      message="Message"
      type="info"
    />
    <n-alert
      :show="show"
      message="Message"
      type="success"
    />
    <n-alert
      :show="show"
      message="Message"
      type="warning"
    />
    <n-alert
      :show="show"
      message="Message"
      type="error"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: true
    }
  }
}
</script>

```
:::

### API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| show | Whether to show | Boolean | false |
| message | Content of Alert | String |  |
| type    | Type of Alert styles, options:`info`,`success`,`warning`,`error` | String | info |
