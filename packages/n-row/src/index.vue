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
    };
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
      const temp = this.gutter ? { marginLeft: -this.gutter + 'px', marginRight: -this.gutter + 'px' } : '';
      let alignItems =
        this.align === 'top' ? 'flex-start'
          : this.align === 'middle' ? 'center'
            : this.align === 'bottom' ? 'flex-end' : '';
      return {
        'display': 'flex',
        'justify-content': this.justify,
        'align-items': alignItems,
        ...temp
      };
    }
  }
};
</script>
