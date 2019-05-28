<template>
  <div class="loadding">
    <div />
    <div />
    <div />
    <div />
  </div>
</template>

<script>
export default {
  name: 'NLoader'
}
</script>

<style lang="scss" scoped>
  .loadding {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 51px;
      height: 51px;
      margin: 6px;
      border: 3px solid #A6A6A6;
      border-radius: 50%;
      animation: loadding 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color:  #A6A6A6 transparent transparent transparent;
    }
  }
  .loadding div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .loadding div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .loadding div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes loadding {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
