<template>
  <n-pagination
    :total="total"
    :page-size="pageSize"
    :current="current"
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
  }
}
</script>
