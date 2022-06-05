<template>
  <div class="demo-collapse">
    <n-collapse v-model="activeNames" @change="handleChange">
      <n-collapse-item title="Consistency" name="1">
        <div>Ninecat-ui is a light Vue 3.0 web UI framework</div>
      </n-collapse-item>
      <n-collapse-item title="Feedback" name="2">
        <div>Ninecat-ui is a light Vue 3.0 web UI framework</div>
      </n-collapse-item>
      <n-collapse-item title="Efficiency" name="3">
        <div>Ninecat-ui is a light Vue 3.0 web UI framework</div>
      </n-collapse-item>
      <n-collapse-item title="Controllability" name="4">
        <div>Ninecat-ui is a light Vue 3.0 web UI framework</div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['1','2'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>