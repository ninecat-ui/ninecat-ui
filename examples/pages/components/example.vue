<template>
  <div>
    <vue-markdown>
      {{ introduction }}
    </vue-markdown>
    <section class="grid">
      <div class="demo-box">
        <div class="source">
          <slot />
        </div>
        <div
          v-show="metaShow"
          class="meta"
        >
          <vue-markdown>
            {{ exampleCode }}
          </vue-markdown>
        </div>
        <div
          class="demo-block-control"
          @click="showMeta"
        >
          <n-icon
            :name="iconName"
          />
        </div>
      </div>
    </section>
    <vue-markdown>
      {{ api }}
    </vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'Example',
  components: {
    VueMarkdown
  },
  props: {
    introduction: {
      type: String,
      default: ''
    },
    exampleCode: {
      type: String,
      default: ''
    },
    api: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      metaShow: false
    }
  },
  computed: {
    iconName () {
      if (this.metaShow) {
        return 'icon-sort-up'
      } else {
        return 'icon-sort-down'
      }
    }
  },
  methods: {
    showMeta () {
      this.metaShow = !this.metaShow
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/index.scss'
</style>
