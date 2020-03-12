# Grid

24 Grids System.

## Basic use
From stacked to horizontal arrangement. With a single set of Row and Col grid components, a basic grid system can be created, and all columns (Col) must be placed in a Row.

### Examples
**Base grid**：From stacked to horizontal arrangement. With a single set of Row and Col grid components, a basic grid system can be created, and all columns (Col) must be placed in a Row.
:::demo
```html
<template>
    <n-row>
        <n-col span="12">
            <div v-bind:style="styleObjectOne">
                12
            </div>
        </n-col>
        <n-col span="12">
            <div v-bind:style="styleObjectTwo">
                12
            </div>
        </n-col>
    </n-row>
    <n-row>
        <n-col span="8">
            <div v-bind:style="styleObjectOne">
                8
            </div>
        </n-col>
        <n-col span="8">
            <div v-bind:style="styleObjectTwo">
                8
            </div>
        </n-col>
        <n-col span="8">
            <div v-bind:style="styleObjectOne">
                8
            </div>
        </n-col>
    </n-row>
    <n-row>
        <n-col span="6">
            <div v-bind:style="styleObjectOne">
                6
            </div>
        </n-col>
        <n-col span="6">
            <div v-bind:style="styleObjectTwo">
                6
            </div>
        </n-col>
        <n-col span="6">
            <div v-bind:style="styleObjectOne">
                6
            </div>
        </n-col>
        <n-col span="6">
            <div v-bind:style="styleObjectTwo">
                6
            </div>
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

**Left and right offset**：Column offset. Use offset to offset the column to the right. For example, offset = "8" shifts the element to the right by the width of 8 columns.
:::demo
```html
<template>
    <n-row>
        <n-col span="8">
            <div v-bind:style="styleObjectOne">
                8
            </div>
        </n-col>
        <n-col span="8" offset="8">
            <div v-bind:style="styleObjectOne">
                8
            </div>
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
            }
        }
    }
</script>
```
:::

**flex alignment**：Flex child elements aligned vertically.
:::demo
```html
<template>
    <n-row align="top">
        <n-col span="8">
            <div v-bind:style="styleObjectOne">
                8
            </div>
        </n-col>
        <n-col span="8" >
            <div v-bind:style="styleObjectTwo">
                8
            </div>
        </n-col>
        <n-col span="8" >
            <div v-bind:style="styleObjectThree">
                8
            </div>
        </n-col>
    </n-row>
     <n-row align="middle">
        <n-col span="8">
            <div v-bind:style="styleObjectOne">
                8
            </div>
        </n-col>
        <n-col span="8" >
            <div v-bind:style="styleObjectTwo">
                8
            </div>
        </n-col>
        <n-col span="8" >
            <div v-bind:style="styleObjectThree">
                8
            </div>
        </n-col>
    </n-row>
    <n-row align="buttom">
        <n-col span="8">
            <div v-bind:style="styleObjectOne">
                8
            </div>
        </n-col>
        <n-col span="8" >
            <div v-bind:style="styleObjectTwo">
                8
            </div>
        </n-col>
        <n-col span="8" >
            <div v-bind:style="styleObjectThree">
                8
            </div>
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
                    height:'100px',
                },
                styleObjectTwo: {
                    background: `#00a0e9` ,
                    color: '#fff',
                    height:'50px',
                },
                styleObjectThree: {
                    background: `rgba(0, 160, 233, 0.7)`,
                    color: '#fff',
                    height:'150px',
                }
            }
        }
    }
</script>
```
:::

### API

#### Row

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| align | the vertical alignment of the flex layout：`top` `middle` `bottom` | String | center |
| gutter | Grid interval, which can be written as pixel values ​​or supports responsive object notation to set the horizontal interval  | Number/String | - |
| justify    | horizontal arrangement of the flex layout:：`start` `end` `center` `space-around` `space-between` | String | center |

#### Col
| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| span | raster number of cells to occupy | String/Number | - |
| offset | the number of cells to offset Col from the left  | Number/String | - |

