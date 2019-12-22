
```
<template>
  <n-pagination
    :total="total"
    :page-size="pageSize"
    :current="current"
    :on-change-pgae="onChangePgae"
  />
</template>

<script>
export default {
  data: () => {
    return {
      total: 100,
      pageSize: 10,
      current: 1
    }
  },
  methods: {
    onChangePgae (page) {
      console.log(page)
    }
  }
}
</script>

```