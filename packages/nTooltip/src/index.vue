<template>
  <div class="n-tooltip">
    <div class="content">
      {{ content }}
    </div>
    <div class="caret" />
  </div>
</template>

<script>
export default {
  name: 'NTooltip',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss">
  .n-tooltip{
    max-width:250px;
    .content{
      background: #272C36;
      border-radius: 4px;
      min-width:104px;
      min-height:24px;
      max-width:250px;
      color:#ffffff;
    }
    .caret{
      width: 0;
      height: 0;
      border-top: 6px solid #272C36;
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
    }
  }
</style>
