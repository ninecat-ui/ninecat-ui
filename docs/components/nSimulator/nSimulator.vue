<template>
  <div :class="['ndoc-simulator', { 'fixed': isFixed }]">
    <iframe
      ref="iframe"
      src="http://localhost:8080/#/hello"
      :style="simulatorStyle"
      frameborder="0"
    />
  </div>
</template>

<script>
export default {
  name: 'NSimulator',

  props: {
    src: String
  },

  data () {
    return {
      scrollTop: window.scrollY,
      windowHeight: window.innerHeight
    }
  },

  computed: {
    isFixed () {
      return this.scrollTop > 60
    },

    simulatorStyle () {
      const height = Math.min(640, this.windowHeight - 90)
      return {
        height: height + 'px'
      }
    }
  },

  mounted () {
    window.addEventListener('scroll', () => {
      this.scrollTop = window.scrollY
    })
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight
    })
  }
}
</script>

<style lang="scss">

.ndoc-simulator {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  border-radius: 6px;
  background: #fafafa;
  box-sizing: border-box;
  right: 30px;
  width: 360px;
  min-width: 360px;
  box-shadow: #ebedf0 0 4px 12px;

  @media (max-width: 1300px) {
    width: 320px;
    min-width: 320px;
  }

  @media (max-width: 1100px) {
    left: 750px;
    right: auto;
  }

  .fixed {
    position: fixed;
    top: 30px;
  }

  iframe {
    width: 100%;
    display: block;
  }
}
</style>
