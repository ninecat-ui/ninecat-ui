<template>
  <button
    class="nbutton"
    :class="[
      type ? type : '',
      disabled ? 'nbutton-disabled' : '',
      size ? size : ''
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
      default: 'default',
      validator (value) {
        return typeof value === 'string';
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
    },
    size: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
button{
  outline:none;
}

.nbutton{
  min-width: 80px;
  height: 36px;
  padding: 0.5em 1em;
  background-color: #F7F7FA;
  border-radius: 6px;
  border: 0;
  vertical-align: middle;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  line-height: 20px;
  cursor:pointer;
  .nbutton-icon{
    display: inline-block;
    margin-right: 0.2em;
  }
}

.default{
  color: #575757;
  &:focus,&:hover{
    background: #E5E5EA;
  };
  &:active{
    color: #272C36;
    background: #D9D9D9;
  }
}

.primary{
  background: #34C3FF;
  color: #ffffff;
  &:focus,&:hover{
    background: #2EABDF;
  };
  &:active{
    background: #2792BF;;
  }
  &:disabled{
    background: #C2EDFF;
  }
}

.link{
  color: #34C3FF;
  background: none;
  border: none;
}

.ghost{
  color: #34C3FF;
  background: #ffffff;
  border: 1px solid #34C3FF;
}

.delicate{
  color: #8E8E93;
  background: none;
  border: none;
}

.nbutton-disabled {
  background-color: #F7F7FA;
  cursor: not-allowed;
  &:focus,&:hover{
    background-color: #F7F7FA;
    outline: none;
  }
}

.lg{
  width: 96px;
  height: 24px;
  font-size: 16px;
  padding: 10px 16px;
}

.md{
  width: 80px;
  height: 36px;
  font-size: 14px;
  padding: 8px 12px;
}

.sm{
  width: 76px;
  height: 30px;
  font-size: 14px;
  padding: 5px 10px;
}

.xs{
  width: 64px;
  height: 24px;
  font-size: 12px;
  padding: 2px 8px;
}
</style>
