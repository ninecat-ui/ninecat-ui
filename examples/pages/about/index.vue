<template>
  <div>
    <router-link
      v-for="route in links"
      :key="route.name"
      :to="route.path"
    >
      {{ route.name }}
    </router-link>
  </div>
</template>

<script>
import { componentRoutes } from '../../router/index.js'

export default {
  data () {
    return {
      links: []
    }
  },
  mounted () {
    this.links = componentRoutes
  }
}
</script>
