<template>
  <router-link
    v-if="item.path"
    active-class="active"
    :to="base + item.path"
  >
    {{ name[0] }} <span>{{ name.slice(1).join(' ') }}</span>
  </router-link>
  <a
    v-else-if="item.link"
    :href="item.link"
  >
    {{ name[0] }} <span>{{ name.slice(1).join(' ') }}</span>
  </a>
  <a
    v-else
    class="title"
  >
    {{ name[0] }} <span>{{ name.slice(1).join(' ') }}</span>
  </a>
</template>

<script>
export default {
  name: 'NNavLink',

  props: {
    base: {
      type: String,
      default: ''
    },
    item: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },

  computed: {
    name () {
      return (this.item.title || this.item.name).split(' ');
    }
  }
};
</script>
<style lang="scss" scoped>
  .title{
    font-weight: 700;
    font-size: 16px;
  }
</style>
