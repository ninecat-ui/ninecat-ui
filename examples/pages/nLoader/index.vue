<template>
  <div>
    <example
      :introduction="introduction"
      :api="api"
      :example-code="exampleCode"
    >
      <slot>
        <n-loader
          :show="show"
        />
      </slot>
    </example>
  </div>
</template>

<script>
import example from '../components/example'
import exampleCode from './md/example-code.md'
import introduction from './md/introduction.md'
import api from './md/api.md'
export default {
  components: {
    example
  },
  data: () => {
    return {
      introduction: introduction,
      exampleCode: exampleCode,
      api: api,
      show: true
    }
  }
}
</script>
