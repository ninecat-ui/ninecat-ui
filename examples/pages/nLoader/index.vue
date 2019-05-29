<template>
  <div>
    <section class="grid">
      <div class="box">
        <n-loader
          :show="show"
          :size="xsSize"
        />
      </div>
      <div class="box">
        <n-loader
          :show="show"
          :size="smSize"
        />
      </div>
      <div class="box">
        <n-loader
          :show="show"
          :size="mdSize"
        />
      </div>
      <div class="box">
        <n-loader
          :show="show"
          :size="lgSize"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: true,
      xsSize: 'xs',
      smSize: 'sm',
      mdSize: 'md',
      lgSize: 'lg'
    }
  }
}
</script>

<style lang="scss" scoped>
  .grid{
    padding-top: 20px;
    display:flex;
    .box{
      flex: 1;
    }
  }
</style>
