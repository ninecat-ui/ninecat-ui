<template>
  <div>
    <vue-markdown>
      {{ introduction }}
    </vue-markdown>
    <section class="grid">
      <div class="demo-box">
        <div class="source">
          <n-loader
            :show="show"
            :size="mdSize"
          />
        </div>
        <div
          v-show="metaShow"
          class="meta"
        >
          <vue-markdown>
            {{ nloaderExample }}
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
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import nloaderExample from '../../markdown/nloader/nloaderExample.md'
import introduction from '../../markdown/nloader/introduction.md'
export default {
  components: {
    VueMarkdown
  },
  data: () => {
    return {
      introduction: introduction,
      nloaderExample: nloaderExample,
      show: true,
      metaShow: false,
      xsSize: 'xs',
      smSize: 'sm',
      mdSize: 'md',
      lgSize: 'lg'
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
      console.log(1222)
      this.metaShow = !this.metaShow
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/index.scss'
</style>
