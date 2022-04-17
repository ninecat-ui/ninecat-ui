
# Message

Used for page information prompts.

## When To Use

Used for page information prompts.

## Examples

:::demo
```html
<template>
  <n-button @click="openMessage('info')">Info Message</n-button>
  <n-button @click="openMessage('success')">Success Message</n-button>
  <n-button @click="openMessage('warning')">Warning Message</n-button>
  <n-button @click="openMessage('error')">Error Message</n-button>
</template>
<script>
export default {
  methods:{
    openMessage(type){
      this.$nMessage({
        type,
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