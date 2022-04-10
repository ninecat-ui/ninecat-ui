# Grid 栅格

24 Col（列）栅格系统。

## 代码演示
### 基础栅格
从堆叠到水平排列。使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统。所有 Col 必须放在 Row 内。
:::demo
```html
<template>
  <n-row>
    <n-col span="12">
      <div :style="styleObjectOne">12</div>
    </n-col>
    <n-col span="12">
        <div :style="styleObjectTwo">12</div>
    </n-col>
  </n-row>
  <n-row>
    <n-col span="8">
      <div :style="styleObjectOne">8</div>
    </n-col>
    <n-col span="8">
      <div :style="styleObjectTwo">8</div>
    </n-col>
    <n-col span="8">
      <div :style="styleObjectOne">8</div>
    </n-col>
  </n-row>
  <n-row>
    <n-col span="6">
      <div :style="styleObjectOne">6</div>
    </n-col>
    <n-col span="6">
      <div :style="styleObjectTwo">6</div>
    </n-col>
    <n-col span="6">
      <div :style="styleObjectOne">6</div>
    </n-col>
    <n-col span="6">
      <div :style="styleObjectTwo">6</div>
    </n-col>
  </n-row>
</template>

<script>
  export default {
    data: function () {
      return {
        styleObjectOne: {
          background: `rgba(0, 160, 233, 0.7)` ,
          color: '#fff',
          height:'50px',
        },
        styleObjectTwo: {
          background: `#00a0e9` ,
          color: '#fff',
          height:'50px',
        }
      }
    }
  }
</script>
```
:::

### 左右偏移
列偏移。使用 offset 可以将列向右侧偏移。例如，offset="8" 将元素向右侧偏移了 8 个 Col 的宽度。

:::demo
```html
<template>
  <n-row>
    <n-col span="8">
      <div :style="styleObjectOne">8</div>
    </n-col>
    <n-col span="8" offset="8">
      <div :style="styleObjectOne">8</div>
    </n-col>
  </n-row>
</template>

<script>
  export default {
    data: function () {
      return {
        styleObjectOne: {
          background: `rgba(0, 160, 233, 0.7)` ,
          color: '#fff',
          height: '50px',
        },
      }
    }
  }
</script>
```
:::

### flex对齐
子元素垂直方向 flex 对齐。
:::demo
```html
<template>
  <n-row align="top">
    <n-col span="8">
      <div v-bind:style="styleObjectOne">8</div>
    </n-col>
    <n-col span="8" >
      <div v-bind:style="styleObjectTwo">8</div>
    </n-col>
    <n-col span="8" >
      <div v-bind:style="styleObjectThree">8</div>
    </n-col>
  </n-row>
    <n-row align="middle">
    <n-col span="8">
      <div v-bind:style="styleObjectOne">8</div>
    </n-col>
    <n-col span="8" >
      <div v-bind:style="styleObjectTwo">8</div>
    </n-col>
    <n-col span="8" >       
      <div v-bind:style="styleObjectThree">8</div>
    </n-col>
  </n-row>
  <n-row align="bottom">
    <n-col span="8">
      <div v-bind:style="styleObjectOne">8</div>
    </n-col>
    <n-col span="8" >
      <div v-bind:style="styleObjectTwo">8</div>
    </n-col>
    <n-col span="8" >
      <div v-bind:style="styleObjectThree">8</div>
    </n-col>
  </n-row>
</template>
<script>
  export default {
    data: function () {
      return {
        styleObjectOne: {
          background: `rgba(0, 160, 233, 0.7)` ,
          color: '#fff',
          height: '80px',
        },
        styleObjectTwo: {
          background: `#00a0e9` ,
          color: '#fff',
          height: '40px',
        },
        styleObjectThree: {
          background: `rgba(0, 160, 233, 0.7)`,
          color: '#fff',
          height: '120px',
        }
      }
    }
  }
</script>
```
:::

## API

### Row

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| align | flex 布局下的垂直对齐方式：`top`,`middle`,`bottom` | String | middle |
| gutter | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔  | Number \| String |  |
| justify    | flex 布局下的水平排列方式：`start`,`end`,`center`,`space-around`,`space-between` | String | center |

### Col
| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| span | 栅格占位格数 | String \| Number |  |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格  | Number \| String |  |

