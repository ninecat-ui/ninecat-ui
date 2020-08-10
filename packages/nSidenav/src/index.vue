<template>
  <div :class="change ? 'n-sidenav' : 'n-sidenav-contract'">
    <div class="n-child">
      <slot />
    </div>
    <div
      class="n-sidenav-footer"
      @click="handleChange"
    >
      <div class="n-sidenav-icon">
        <div class="n-sidenav-icons" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NSidenav',
  data () {
    return {
      change: true
    };
  },
  mounted () {},
  methods: {
    handleChange () {
      this.change = !this.change;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
