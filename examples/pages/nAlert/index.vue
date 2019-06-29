<template>
  <div>
    <section class="alert-demo">
      <n-alert
        :show="show"
        message="Message"
        type="info"
      />
    </section>
    <section class="alert-demo">
      <n-alert
        :show="show"
        message="Message"
        type="success"
      />
    </section>
    <section class="alert-demo">
      <n-alert
        :show="show"
        message="Message"
        type="warning"
      />
    </section>
    <section class="alert-demo">
      <n-alert
        :show="show"
        message="Message"
        type="error"
      />
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .alert-demo{
    margin-bottom: 10px;
  }
</style>
