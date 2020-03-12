<template>
  <div
    class="ndoc-container ndoc-row"
    :class="{ 'ndoc-container--with-simulator': hasSimulator }"
  >
    <div :class="['n-doc-content', `n-doc-content--${currentPage}`]">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NContainer',
  props: {
    hasSimulator: Boolean
  },
  computed: {
    currentPage () {
      const { path } = this.$route
      if (path) {
        return path.split('/').slice(-1)[0]
      }
      return this.$route.name
    }
  }
}
</script>

<style lang="scss">
.ndoc-container {
  overflow: hidden;
  box-sizing: border-box;
  color: #34495e;
  padding-left: 220px;
    .n-doc-content {
    flex: 1;
    position: relative;
    padding: 30px 60px 75px 60px;
    .card {
      padding: 24px;
      margin-bottom: 24px;
      border-radius: 6px;
      background-color: #fff;
      box-shadow: 0 8px 12px #ebedf0;
    }

    a {
      color: #1989fa;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.5;
      font-weight: 400;
      color:#455a64;
      cursor: pointer;
    }

    h1 {
      margin-top: 8px;
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 30px;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      line-height: 38px;
    }

    h2 {
      clear: both;
      font-size: 26px;
      margin: 1em 0 0.6em;
      font-weight: 500;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    }

    h3 {
      clear: both;
      font-size: 22px;
      margin: 1em 0 0.6em;
      font-weight: 500;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    }

    h4 {
      clear: both;
      font-size: 18px;
      margin: 1em 0 0.6em;
      font-weight: 500;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    }

    h5 {
      clear: both;
      font-size: 14px;
      margin: 1em 0 0.6em;
      font-weight: 500;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    }

    p {
      font-size: 16px;
      line-height: 26px;
      margin:10px;
      color: #34495e;
    }

    pre{
      padding: 18px 20px;
      background: #fafafa;
      font-size: 14px;
    }

    code{
      margin: 0;
      padding: 0;
      overflow: auto;
      color: #314659;
      line-height: 20px;
      font-size: 14px;
      background: #fafafa;
      border: none;
    }

    table {
      border: 1px solid #fbfbfb;
      width: 90%;
      margin-top: 12px;
      font-size: 13px;
      line-height: 1.5;
      border-radius: 6px;
      border-collapse: collapse;
      color: #34495e;

      th {
        border: 1px solid #fbfbfb;
        padding: 8px 10px;
        text-align: left;
        font-weight: 500;
        font-size: 16px;
        background-color: #fbfbfb;
        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }
      }

      td {
        border: 1px solid #fbfbfb;
        padding: 8px;
        border-top: 1px solid #f1f4f8;
        font-size: 14px;
        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }
      }
      code {
        font-size: 13px;
        padding: 0 8px;
        font-family: inherit;
        word-break: keep-all;
      }
    }

    hr {
      border: 0 none;
      margin: 30px 0;
      border-top: 1px solid #eee;
    }

    p > code,
    li > code,
    table code {
      margin: 2px 3px;
      padding: 2px 5px;
      display: inline;
      box-shadow: none;
      background-color: #f0f2f5;
    }

    section {
      overflow: hidden;
    }

    blockquote {
      padding: 16px;
      margin: 20px 0 0;
      font-size: 14px;
      border-radius: 4px;
      background-color: #ecf9ff;
      color: rgba(52, 73, 94, .8);
      border-left: 5px solid #50bfff;
    }

    &--changelog {
      strong {
        display: block;
        margin: 12px 0;
        font-size: 15px;
        font-weight: 500;
      }

      h3 {
        font-size: 20px;

        + p code {
          margin: 0;
        }

        a {
          color: inherit;
        }
      }
    }
  }
}
</style>
