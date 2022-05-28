<template>
  <div>
    <div class="demo-type">
    <div><n-avatar>MD</n-avatar></div>
    <div>
      <n-avatar
        src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"
      />
    </div>
    <div>
      <n-avatar><n-icon name="icon-home" /></n-avatar>
    </div>
  </div>
  <div class="demo-type">
    <div><n-avatar shape="circle">MD</n-avatar></div>
    <div>
      <n-avatar
        shape="circle"
        src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"
      />
    </div>
    <div>
      <n-avatar><n-icon name="icon-home" /></n-avatar>
    </div>
  </div>
  <div class="demo-type">
    <div><n-avatar shape="circle" style="color: #f56a00; background-color: #fde3cf">M</n-avatar></div>
    <div>
      <n-avatar style="color:#e950a9">Lu</n-avatar>
    </div>
    <div>
      <n-avatar style="background-color: #87d068"><n-icon name="icon-home" /></n-avatar>
    </div>
  </div>
  </div>
</template>

<style scoped>
.demo-type {
  display: flex;
  margin-bottom: 5px;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid #ddd;
}
</style>
