<template>
  <div>
    <!-- 支持24个栅格 -->
    <!-- 支持offset -->
    <div>支持offset</div>
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
    <div>均分</div>
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
    <div>支持gutter</div>
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
