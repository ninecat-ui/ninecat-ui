<template>
  <div class="nupload">
    <slot />
    <input
      type="file"
      class="nfile"
    >
  </div>
</template>

<script>
export default {
  name: 'NUpload'
}
</script>

<style lang="scss">
.nupload{
  position: relative;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  outline: none;
  .nfile{
    position: absolute;
    height: 100%;
    width: 100%;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    font-size: 100px;
    cursor: pointer;
  }
}

</style>
