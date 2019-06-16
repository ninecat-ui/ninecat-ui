<template>
  <div>
    <!-- 支持24个栅格 -->
    <!-- 支持offset -->
    <n-row class="marginTop">
      <n-col span="1">
        <div class="blue">
          1
        </div>
      </n-col>
      <n-col
        span="10"
        offset="1"
      >
        <div class="yellow">
          2
        </div>
      </n-col>
    </n-row>
    <!-- 默认均分 -->
    <n-row class="marginTop">
      <n-col>
        <div class="blue">
          1
        </div>
      </n-col>
      <n-col>
        <div class="yellow">
          2
        </div>
      </n-col>
      <n-col>
        <div class="blue">
          3
        </div>
      </n-col>
      <n-col>
        <div class="yellow">
          4
        </div>
      </n-col>
    </n-row>
    <!-- 支持gutter -->
    <n-row
      gutter="12"
      class="marginTop"
    >
      <n-col>
        <div class="blue">
          1
        </div>
      </n-col>
      <n-col>
        <div class="yellow">
          2
        </div>
      </n-col>
      <n-col>
        <div class="blue">
          3
        </div>
      </n-col>
      <n-col>
        <div class="yellow">
          4
        </div>
      </n-col>
    </n-row>
  </div>
</template>

<style lang="scss" scoped>
.blue {
    background-color: blue;
    color: white;
}
.yellow {
    background-color: black;
    color: white;
}
.marginTop {
    margin-top: 10px;
}
</style>
