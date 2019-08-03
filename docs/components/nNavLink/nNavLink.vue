<template>
  <router-link
    v-if="item.path"
    active-class="active"
    :to="base + item.path"
    v-html="itemName"
  />
  <a
    v-else-if="item.link"
    :href="item.link"
    v-html="itemName"
  />
  <a
    v-else
    class="title"
    v-html="itemName "
  />
</template>

<script>
export default {
  name: 'NNavLink',

  props: {
    base: {
      type: String,
      default: ''
    },
    item: Object
  },

  computed: {
    itemName () {
      const name = (this.item.title || this.item.name).split(' ')
      return `${name[0]} <span>${name.slice(1).join(' ')}</span>`
    }
  }
}
</script>
<style lang="scss" scoped>
  .title{
    font-weight: 700;
  }
</style>
