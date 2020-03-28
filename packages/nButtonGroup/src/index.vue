<template>
  <div class="n-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NButtonGroup',
  mounted () {
    for (let node of this.$el.children) {
      const name = node.nodeName.toLowerCase();
      if (name !== 'button') {
        console.warn(`n-button-group 的子元素应该全是 n-button，但是你写的是 ${name}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.n-button-group{
   display: inline-flex;
   vertical-align: middle;
   /deep/ .nbutton{
     border-radius: 0px;
     &:first-child{
       border-top-left-radius: 6px;
       border-bottom-left-radius: 6px;
     }
     &:last-child{
       border-top-right-radius: 6px;
       border-bottom-right-radius: 6px;
     }
   }

}
</style>
