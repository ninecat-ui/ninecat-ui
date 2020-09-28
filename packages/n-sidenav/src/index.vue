<template>
  <div class="n-sidenav">
    <div class="n-child">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'NSidenav',
  data () {
    return {
      expand: true
    };
  },
  mounted () {},
  methods: {
    handleChange () {
      this.expand = !this.expand;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
