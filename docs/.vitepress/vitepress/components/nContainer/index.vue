<template>
<div class="n-container">
  <slot></slot>
</div>
</template>

<style lang="scss">
.n-container{
  margin-left: 250px;
  padding-top: 60px;
  padding-left: 55px;
  padding-right: 260px;
  padding-bottom: 100px;
  // height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
  h2{
    border-bottom: none !important;
  }
}
</style>