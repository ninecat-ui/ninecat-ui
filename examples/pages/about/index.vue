<template>
  <div>
    <router-link
      v-for="route in links"
      :key="route.name"
      :to="route.path"
    >
      <h2>
        {{ route.name }}
      </h2>
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
