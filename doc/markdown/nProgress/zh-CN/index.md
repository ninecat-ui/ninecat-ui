# Progress 进度条
展示操作的当前进度。

## 何时使用
在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

## 代码演示
:::demo
```html
  <template>
    <n-progress />
    <n-progress color="rgb(255, 193, 7)" :percent="20"/>
    <n-progress color="#3498ff" :percent="50" :width="20"/>
  </template>

```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| color | 进度条颜色 | String | |
| percent | 进度百分比 | Number | 0 |
| width | 进度条宽度（像素) | Number | 10 |
