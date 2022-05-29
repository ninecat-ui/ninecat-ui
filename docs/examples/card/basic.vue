<template>
  <div>
    <n-card title="Default size card" >
      <template #extra><n-button type="link">more</n-button></template>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </n-card>
    <n-card style="margin-top: 20px;">
      <template #header>
      <div class="card-header">
        <span>Card name</span>
        <n-button>Operation button</n-button>
      </div>
    </template>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </n-card>
    <n-card style="margin-top: 20px;"  size="small" title="Small size card">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </n-card >
  </div>
</template>
<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}
</style>