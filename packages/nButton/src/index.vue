<template>
  <button
    class="nbutton"
    :class="[
      type ? type : '',
      disabled ? 'nbutton-disabled' : ''
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span
      v-if="icon || loading"
      class="nbutton-icon"
    >
      <n-icon
        v-if="loading"
        class="loading"
        name="icon-wind-loading"
      />
      <n-icon
        v-if="icon && !loading"
        :name="icon"
      />
    </span>
    <span class="nbutton-content">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'NButton',
  props: {
    type: {
      type: String,
      default: '',
      validator (value) {
        return typeof value === 'string'
      }
    },
    icon: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    }
  },
  mounted () {
    console.log(this.$props)
  }
}
</script>

<style lang="scss" scoped>

.nbutton{
  padding: 0.5em 1em;
  background-color: #F7F7FA;
  border-radius: 6px;
  border: 0;
  vertical-align: middle;
  cursor: pointer;
  &:focus,&:hover{
    background-color: #E5E5EA;
    outline: none;
  }
  .nbutton-icon{
    display: inline-block;
    margin-right: 0.2em;
  }
}

.nbutton-disabled {
  background-color: #F7F7FA;
  cursor: not-allowed;
  &:focus,&:hover{
    background-color: #F7F7FA;
    outline: none;
  }
}
</style>
