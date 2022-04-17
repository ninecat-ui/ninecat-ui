# Progress 进度条
展示操作的当前进度。

## 何时使用
在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

## 代码演示

### 基本使用
:::demo
```html
  <template>
    <n-progress />
    <n-progress color="rgb(255, 193, 7)" :percent="20"/>
    <n-progress color="#3498ff" :percent="50" :width="20"/>
  </template>

```
:::

### 进度圈
:::demo
```html
  <template>
    <n-progress type="circle" :width="100" :stroke-width="10" color="rgb(52, 152, 255)" :percent="50"/>
  </template>

```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 进度条形状，可选`line`,`circle` | String | `line` |
| color | 进度条颜色 | String | |
| percent | 进度百分比 | Number | 0 |
| width | 进度条宽度（像素),type为circle时，代表画布宽度 | Number | 10 |
| stroke-width | type为circle时使用，代表圆圈的宽度 | Number | 10 |

