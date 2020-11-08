<template>
  <div>
    <n-button type="primary" @click="handleClick">
      Primary
    </n-button>
    <n-tag>Tag 1</n-tag>
    <Child>
      <template v-slot:footer>
        <div>
          <h1>test </h1>
        </div>
      </template>
    </Child>
  </div>
</template>

<script>
import Child from './child';
export default {
  name: 'Test',
  components: {
    Child
  },
  methods: {
    handleClick () {
      console.log('Ninecat');
    }
  }
};
</script>

<style>

</style>
