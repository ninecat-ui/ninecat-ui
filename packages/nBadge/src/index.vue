<template>
  <button
    class="nBadge"
    :class="[type ? type : '']"
  >
    <span
      class="badgeTitle"
      :class="[type==='new'? 'newTitle' : '']"
    >
      <slot />
    </span>
  </button>
</template>
<script>
export default {
  name: 'NBadge',
  props: {
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return typeof value === 'string'
      }
    },
    badgeTitle: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
.nBadge {
  width: 33px;
  outline : none;
  border:0;
  border-radius: 15px;
  height: 16px;
  font: 12px;
  color: #fff;
  background-color: #F44336;
}
.badgeTitle{
  position:relative;
  top: -1px;
  color:#fff;
  margin-left :-2px;
  margin-top :-2px;
}
.newTitle{
  margin-left: -3.5px;
}
.small{
  width: 4px;
    height: 7px;
    border-radius: 50%;
    margin: 0;
    padding: 0px 3.5px;
}
</style>
