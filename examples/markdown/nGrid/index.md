### Grid栅格

24 栅格系统。

#### 基础
从堆叠到水平排列。使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。
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
        data: function() {
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

