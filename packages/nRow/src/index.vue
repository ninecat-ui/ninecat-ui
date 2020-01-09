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
      return {
        'display': 'flex',
        'justify-content': this.justify,
        'align-items': this.align,
        ...temp
      }
    }
  }
}
</script>
