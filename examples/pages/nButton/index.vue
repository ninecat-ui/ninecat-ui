<template>
  <div>
    <example
      :introduction="introduction"
      :api="api"
      :example-code="exampleCode"
    >
      <slot>
        <n-button>Default</n-button>
        <n-button type="primary">
          Primary
        </n-button>
        <n-button type="link">
          Link
        </n-button>
        <n-button type="ghost">
          Ghost
        </n-button>
        <n-button type="delicate">
          Delicate
        </n-button>
        <n-button icon="icon-home" />
        <n-button loading />
        <n-button
          @click="handleClick"
        >
          Click
        </n-button>
        <n-button
          disabled
          @click="handleClick"
        >
          Disable
        </n-button>
      </slot>
    </example>
  </div>
</template>

<script>
import introduction from './md/introduction.md'
import api from './md/api.md'
import exampleCode from './md/example-code.md'
import example from '../components/example'
export default {
  components: {
    example
  },
  data: function () {
    return {
      introduction,
      exampleCode,
      api
    }
  },
  methods: {
    handleClick () {
      alert('111')
    }
  }
}
</script>
