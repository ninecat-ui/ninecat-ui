
# Pagination

Pagination navigation, used to help long lists only load part of the data, and can quickly switch to a specified data page.

## When To Use

When loading / rendering all data will take a lot of time; switch page numbers to browse the data.

## Examples

### Basic use
:::demo
```html
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
  data: function() {
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
:::

### Size
:::demo
```html
<template>
  <n-pagination
    size="xs"
    :total="total"
    :page-size="pageSize"
    :current="current"
  />
  <n-pagination
    size="sm"
    :total="total"
    :page-size="pageSize"
    :current="current"
  />
  <n-pagination
    size="md"
    :total="total"
    :page-size="pageSize"
    :current="current"
  />
  <n-pagination
    size="lg"
    :total="total"
    :page-size="pageSize"
    :current="current"
  />
</template>

<script>
  export default {
    data: function() {
      return {
        total: 100,
        pageSize: 10,
        current: 1
      }
    }
  }
</script>
```
:::

### API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| total | total | Number | 0 |
| current | current page number | Number | 1 |
| page-size |digital per page | Number | 10 |
| size | size of pagination | String,options:'xs','sm','md','lg' | 'sm' |
|onChangePgae|Click the callback method to switch pages|Function| |