<template>
  <div class="basic">
    <div class="basic-item">
    <n-avatar class="item" size="lg">LG</n-avatar>
    <n-avatar class="item">MD</n-avatar>
    <n-avatar class="item" size="sm">SM</n-avatar>
    <n-avatar class="item" size="xs">XS</n-avatar>
  </div>
  <div class="basic-item">
    <n-avatar class="item" size="xs" shape="circle">XS</n-avatar>
    <n-avatar class="item" size="sm" shape="circle">SM</n-avatar>
    <n-avatar class="item" shape="circle">MD</n-avatar>
    <n-avatar class="item" size="lg" shape="circle">LG</n-avatar>    
  </div>
  </div>
  
  
</template>

<style scoped>
.basic{
  display: flex;
  justify-content: center;
}
.item{
  margin-right: 25px;
  margin-bottom: 10px;
}
</style>