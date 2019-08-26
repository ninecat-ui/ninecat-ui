
```
<template>
  <div>
    <n-alert
      :show="show"
      message="Message"
      type="info"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: true
    }
  }
}
</script>

```