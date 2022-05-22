<template>
  <n-badge content="news" type="warning" class="item">
    <n-button>Comments</n-button>
  </n-badge>
  <n-badge content="hot" color="pink" class="item">
    <n-button>Comments</n-button>
  </n-badge>
  <n-badge content="10" color="gold" class="item">
    <n-button>Comments</n-button>
  </n-badge>
  <n-badge content="hot" class="item">
    <n-button type="primary" icon="icon-commentlines-fill"></n-button>
  </n-badge>
  <n-badge :content="120" :max="99" color="#f50" class="item">
    <n-button icon="icon-shopping-cart-fill"></n-button>
  </n-badge>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 20px;
}
</style>