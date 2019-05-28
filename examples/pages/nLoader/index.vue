<template>
  <div>
    <n-loader
      :show="show"
      :size="size"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: true,
      size: 'md'
    }
  }
}
</script>
