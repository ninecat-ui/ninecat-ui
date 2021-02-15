
# Card 

Display the information in the card container.

## When To Use

Use when you need to introduce something.

##  Examples

### Basic Use

:::demo
```html
<template>
  <n-card :src="src" :description="description" title="ninecat-ui"/>
</template>
<script>
  export default {
    data () {
      return {
        src: 'https://github.com/ninecat-ui/ninecat-ui/raw/master/static/Screenshot_en_new.png?raw=true',
        description:'ninecat-ui,A Light Vue 3.0 Web UI Framework'
      }
    }
  }
</script>
```
:::

## API

| Property | Description | Type | 
| :--- | :--- | :--- | :--- |
| src | Picture address | String | 
| title | Card title | String |  
| description | Content introduction | String |  



