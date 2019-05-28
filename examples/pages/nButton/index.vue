<template>
  <div>
    <n-button>test</n-button>
    <n-button type="xxx">
      test
    </n-button>
    <n-button icon="icon-home">
      test
    </n-button>
    <n-button loading>
      test
    </n-button>
    <n-button

      @click="handleClick"
    >
      click
    </n-button>
    <n-button
      disable
      type="xxx"
    >
      disable
    </n-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      alert('111')
    }
  }
}
</script>
