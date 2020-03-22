## Progress
Show the current progress of the operation.

## When To Use
When an operation takes a long time to complete, the user is shown the current progress and status of the operation.


## Examples
:::demo
```html
  <template>
    <n-progress />
    <n-progress color="rgb(255, 193, 7)" :percent="20"/>
    <n-progress color="#3498ff" :percent="50"/>
    <n-progress color="#3498ff" :percent="50" :width="20"/>
  </template>

```
:::

### API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| color | Line color | String | |
| percent | Progress percentage | Number | 0 |
| width | Progress bar width | Number | 10 |
