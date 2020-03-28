<template>
  <div class="n-toast">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NToast',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.$el.remove();
      this.$destroy();
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.n-toast{
  position: absolute;
  left: 50%;
  top: 50%;
  transform:  translateX(-50%) translateY(-50%);
  background: rgba(0,0,0,0.6);
  color: white;
  padding: 0.2em 0.6em;
  border-radius: 4px;
}
</style>
