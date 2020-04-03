
# Card 

Display the information in the card container.

## When To Use

Use when you need to introduce something.

##  Examples

### Basic Use

:::demo
```html
<template>
  <n-card :src="src" :description="description" title="Bird"/>
</template>
<script>
  export default {
    data () {
      return {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585736912147&di=b569099e49bb8d6216841e4819d98222&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F21%2F09%2F01200000026352136359091694357.jpg',
        description:'Birds, also called birds. Definition: Oviparous vertebrates covered with feathers on the body surface. The main characteristics of birds are: the body is streamlined (spindle or spindle), and most of them fly.'
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



