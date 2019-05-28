<template>
  <button
    class="nButton"
    :class="[type ? type : '']"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span
      v-if="icon || loading"
      class="nButton-icon"
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
    <slot />
  </button>
</template>

<script>
export default {
  name: 'NButton',
  props: {
    type: {
      type: String,
      default: ''
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
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.nButton{
  padding: 0.5em 1em;
  background-color: #F7F7FA;
  border-radius: 6px;
  border: 0;
  vertical-align: top;
  cursor: pointer;
  &:focus,&:hover{
    background-color: #E5E5EA;
    outline: none;
  }
  .nButton-icon{
    display: inline-block;
    margin-right: 0.2em;
  }
}
</style>
