
# Alert

Alert component for feedback.

## When To Use

When you need to show alert messages to users.

## Examples
### Basic use
:::demo
```html
<template>
  <div >
    <n-alert
      v-model:show="show1"
      message="Message"
      type="info"
    />
    <n-alert
      v-model:show="show2"
      message="Message"
      type="success"
    />
    <n-alert
      v-model:show="show3"
      message="Message"
      type="warning"
      closable
    />
    <n-alert
      v-model:show="show4"
      message="Message"
      type="error"
      :showIcon="true"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
    }
  }
}
</script>

```
:::

### Customize define close
:::demo
```html
<template>
  <div >
    <n-alert
      closable
      v-model:show="show"
      message="Message"
      type="info"
      close-text="Close now"
    />
  </div>
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

### Contains supporting text introduction
:::demo
```html
<template>
  <div >
    <n-alert
      v-model:show="show"
      message="Success Text"
      type="success"
      description="Success Description Success Description Success Description"
    />
    <n-alert
      closable
      v-model:show="show"
      message="Warning Text"
      type="warning"
      :showIcon="true"
      description="Warning Description Warning Description Warning Description"
    />
  </div>
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
| show | Whether to show | Boolean | false |
| closable | Whether to close | Boolean | false |
| message | Content of Alert | String |  |
|description |	Auxiliary text introduction for warnings |	String| |
| type    | Type of Alert styles, options:`info`,`success`,`warning`,`error` | String | info |
| closeText | Custome define close text | String |  |
| showIcon | Whether show icon | Boolean | flase |
