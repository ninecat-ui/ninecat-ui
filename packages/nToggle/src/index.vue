<template>
  <div class="n-toggle">
    <label>
      <input
        id="toggle"
        v-model="isChecked"
        type="checkbox"
        style="display: none;"
        :disabled="disabled"
        @change="handleChange"
      >
      <span
        class="n-toggle-body"
        :class="{ disabled }"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'NToggle',
  model: {
    prop: 'checked',
    event: 'updateModel'
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      isChecked: this.$props.checked
    };
  },
  methods: {
    handleChange () {
      this.$emit('updateModel', this.isChecked);
    }
  }
};
</script>

<style lang="scss" scoped>
$color-blue: #3498ff;
$color-grey: #d9d9d9;
$color-hover-blue: #2589f5;
$color-hover-grey: #c5c6c7;
$color-disable-blue: #cce9ff;
$color-disable-grey: #f7f7fa;
$button-width: 44px;
$button-height: 24px;
$toggle-diameter: 18px;
$button-toggle-offset: 3px;
$toggle-border-radius: 18px;

.n-toggle {
  display: inline-block;
  width: $button-width;
  height: $button-height;
}
.n-toggle-body {
  display: inline-block;
  width: $button-width;
  height: $button-height;
  background-color: $color-grey;
  border-radius: $toggle-border-radius;
  position: relative;
  cursor:pointer;
  &::after {
    content: '';
    display: inline-block;
    width: $toggle-diameter;
    height: $toggle-diameter;
    background-color: #ffffff;
    border-radius: $toggle-diameter / 2;
    position: absolute;
    top: $button-toggle-offset;
    transform: translateX($button-toggle-offset);
    transition: 0.1s all ease-in-out;
  }
  transition: 0.1s all ease-in-out;
  &:hover {
    background-color: $color-hover-grey;
  }
  &.disabled {
    background-color: $color-disable-grey;
  }
}
#toggle[type='checkbox']:checked + span {
  background-color: $color-blue;
  &::after {
    transform: translateX(
      $button-width - $toggle-diameter - $button-toggle-offset
    );
  }
  &:hover {
    background-color: $color-hover-blue;
  }
  &.disabled {
    background-color: $color-disable-blue;
  }
}
</style>
