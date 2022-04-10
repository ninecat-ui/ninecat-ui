# Drawer

Floating panel sliding out of the edge of the screen.

## When To Use

A floating layer that slides from the edge of the page can replace Modal to put more content.

## Examples
:::demo
```html
<template>
  <n-button 
    @click.native="openDrawer">
    Open Drawer
  </n-button>
  <n-drawer
    :show.sync="drawerShow"
    title="Drawer Title"
    :confirm="confirm"
    :cancel="cancel"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </n-drawer>
</template>
<script>
  export default{
    data:function(){
      return {
        drawerShow:false,
      }
    },
    methods:{
      openDrawer () {
        this.drawerShow = true
      },
      confirm () {
        console.log('confirm')
      },
      cancel () {
        console.log('cancel')
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
| title | title of the Drawer| String |  |
| confirm    | Confirm callback function | Function     |  |
| cancel    | Cancel callback function | Function     |  |