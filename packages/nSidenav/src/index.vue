<template>
  <div :class="change ? 'n-sidenav' : 'n-sidenav-contract'">
    <div class="n-child">
      <slot/>
    </div>
    <div @click="handleChange" class="n-sidenav-footer">
      <div class="n-sidenav-icon">
        <div class="n-sidenav-icons"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NSidenav",
  mounted() {},
  data() {
    return {
      change: true
    };
  },
  methods: {
    handleChange() {
      this.change = !this.change;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>

