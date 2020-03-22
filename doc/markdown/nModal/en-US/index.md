# Modal

Modal dialog

## When To Use
When users need to handle transactions and do not want to jump to the page to interrupt the workflow, you can use Modal to open a floating layer in the middle of the current page to carry the corresponding operations.


## Examples
:::demo
```html
<template>
  <n-button 
    @click.native="openModal">
    Open modal
  </n-button>
  <n-modal
    :show.sync="modalShow"
    :title="modalTitle"
    :confirm="confirm"
    :cancel="cancel"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </n-Modal>
</template>
<script>
  export default{
    data:function(){
      return {
        modalShow:false,
        modalTitle:'This is title'
      }
    },
    methods:{
      openModal () {
        this.modalShow = true
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
| show | Whether to show modal | Boolean | false |
| title | title of the modal | String |  |
| confirm    | Confirm callback function | Function     |  |
| cancel    | Cancel callback function | Function     |  |