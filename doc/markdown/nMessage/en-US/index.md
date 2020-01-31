
# Message

用于页面信息提示。

## When To Use

Used for page information prompts.

### Examples

:::demo
```html
<template>
  <n-button @click="openMessage">Open Message</n-button>
</template>
<script>
export default {
  methods:{
    openMessage(){
      this.$nMessage({
        type: 'info',
        message: 'I open the Message',
      })
    }
  }
}
</script>
```
:::

### API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| type | type of the message,options：`info`,`success`,`warning`,`error` | String | info |
| message| message content | String |  |
| duration| message display time (ms) | Number | 3000 |