<template>
  <n-tag
    v-for="tag in dynamicTags"
    :key="tag"
    class="mx-1"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)"
  >
    {{ tag }}
  </n-tag>
  <n-input
    v-if="inputVisible"
    ref="InputRef"
    style="width:100px"
    v-model="inputValue"
    @keyup.enter="handleInputConfirm"
    @blur="handleInputConfirm"
  />
  <n-button v-else size="small" @click="showInput">
    + New Tag
  </n-button>
</template>

<script lang="ts" setup>
import { nextTick,ref } from "vue";
const InputRef = ref<InstanceType<any>>()
const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);
const inputValue = ref('')
const inputVisible = ref(false)
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};
const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value?.input?.focus()
  })
}
const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}
</script>
