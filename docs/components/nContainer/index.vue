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
      color:#333;
      cursor: pointer;
    }

    h1 {
      margin: 0 0 40px;
      font-size: 40px;
      cursor: default;
    }

    h2 {
      font-size: 35px;
      margin: 45px 0 20px;
    }

    h3 {
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 12px;
    }

    h4 {
      font-size: 20px;
      font-weight: 500;
      margin: 24px 0 12px;
    }

    h5 {
      font-size: 14px;
      font-weight: 500;
      margin: 24px 0 12px;
    }

    p {
      font-size: 16px;
      line-height: 26px;
      margin:10px;
      color: #34495e;
    }

    pre{
      padding: 20px;
      background: #f2f4f5;
      font-size: 14px;
    }

    code{
      margin: 0;
      padding: 0;
      overflow: auto;
      color: #314659;
      line-height: 20px;
      font-size: 14px;
      background: #f2f4f5;
      border: none;
    }

    table {
      width: 100%;
      margin-top: 12px;
      font-size: 13px;
      line-height: 1.5;
      border-radius: 6px;
      border-collapse: collapse;
      color: #34495e;

      th {
        padding: 8px 10px;
        text-align: left;
        font-weight: 500;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }
      }

      td {
        padding: 8px;
        border-top: 1px solid #f1f4f8;

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

    ul li,
    ol li {
      color: #34495e;
      font-size: 14px;
      line-height: 22px;
      margin: 5px 0 5px 10px;
      padding-left: 15px;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 6px;
        margin-top: 8px;
        border-radius: 50%;
        box-sizing: border-box;
        border: 1px solid #666;
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
