<template>
  <div>
    <example
      :introduction="introduction"
      :api="api"
      :example-code="exampleCode"
    >
      <section class="message-demo">
        <n-input size="md" />
      </section>
    </example>
  </div>
</template>

<script>
import example from '../components/example'
import introduction from './md/introduction.md'
import api from './md/api.md'
import exampleCode from './md/example-code.md'
export default {
  components: {
    example
  },
  data () {
    return {
      message: '',
      introduction: introduction,
      api: api,
      exampleCode: exampleCode
    }
  },
  methods: {
    handleChange (e) {
      console.log(e)
    }
  }
}
</script>
