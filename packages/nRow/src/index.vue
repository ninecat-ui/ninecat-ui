<template>
  <div
    class="row"
    :style="[gutterStyle]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NRow',
  provide () {
    return {
      gutter: this.gutter
    }
  },
  props: {
    gutter: {
      type: [Number, String],
      default: ''
    },
    justify: {
      type: [String],
      default: 'center'
    },
    align: {
      type: [String],
      default: 'center'
    }
  },
  computed: {
    gutterStyle () {
      const temp = this.gutter ? { marginLeft: -this.gutter + 'px', marginRight: -this.gutter + 'px' } : ''
      let alignItems = ''
      if (this.align === 'top') {
        alignItems = 'flex-start'
      } else if (this.align === 'middle') {
        alignItems = 'center'
      } else if (this.align === 'buttom') {
        alignItems = 'flex-end'
      }
      return {
        'display': 'flex',
        'justify-content': this.justify,
        'align-items': alignItems,
        ...temp
      }
    }
  }
}
</script>
