<template>
  <div
    class="ndoc-container ndoc-row"
    :class="{ 'ndoc-container--with-simulator': hasSimulator }"
  >
    <div :class="['n-doc-content', `n-doc-content--${currentPage}`]">
      <slot />
    </div>
    <div
      v-if="currentPage && currentPage !== 'about'"
      class="github-item"
    >
      <a
        :href="currentGithubUrl"
        target="_blank"
        title="View Markdown"
      >
        <svg
          t="1584795147277"
          class="icon"
          viewBox="0 0 1049 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2715"
          width="32"
          height="32"
        ><path
          d="M524.979332 0C234.676191 0 0 234.676191 0 524.979332c0 232.068678 150.366597 428.501342 358.967656 498.035028 26.075132 5.215026 35.636014-11.299224 35.636014-25.205961 0-12.168395-0.869171-53.888607-0.869171-97.347161-146.020741 31.290159-176.441729-62.580318-176.441729-62.580318-23.467619-60.841976-58.234462-76.487055-58.234463-76.487055-47.804409-32.15933 3.476684-32.15933 3.476685-32.15933 53.019436 3.476684 80.83291 53.888607 80.83291 53.888607 46.935238 79.963739 122.553122 57.365291 152.97411 43.458554 4.345855-33.897672 18.252593-57.365291 33.028501-70.402857-116.468925-12.168395-239.022047-57.365291-239.022047-259.012982 0-57.365291 20.860106-104.300529 53.888607-140.805715-5.215026-13.037566-23.467619-66.926173 5.215027-139.067372 0 0 44.327725-13.906737 144.282399 53.888607 41.720212-11.299224 86.917108-17.383422 131.244833-17.383422s89.524621 6.084198 131.244833 17.383422C756.178839 203.386032 800.506564 217.29277 800.506564 217.29277c28.682646 72.1412 10.430053 126.029806 5.215026 139.067372 33.897672 36.505185 53.888607 83.440424 53.888607 140.805715 0 201.64769-122.553122 245.975415-239.891218 259.012982 19.121764 16.514251 35.636014 47.804409 35.636015 97.347161 0 70.402857-0.869171 126.898978-0.869172 144.282399 0 13.906737 9.560882 30.420988 35.636015 25.205961 208.601059-69.533686 358.967656-265.96635 358.967655-498.035028C1049.958663 234.676191 814.413301 0 524.979332 0z"
          fill="#34C3FF"
          p-id="2716"
        /><path
          d="M199.040177 753.571326c-0.869171 2.607513-5.215026 3.476684-8.691711 1.738342s-6.084198-5.215026-4.345855-7.82254c0.869171-2.607513 5.215026-3.476684 8.691711-1.738342s5.215026 5.215026 4.345855 7.82254z m-6.953369-4.345856M219.900283 777.038945c-2.607513 2.607513-7.82254 0.869171-10.430053-2.607514-3.476684-3.476684-4.345855-8.691711-1.738342-11.299224 2.607513-2.607513 6.953369-0.869171 10.430053 2.607514 3.476684 4.345855 4.345855 9.560882 1.738342 11.299224z m-5.215026-5.215027M240.760389 807.459932c-3.476684 2.607513-8.691711 0-11.299224-4.345855-3.476684-4.345855-3.476684-10.430053 0-12.168395 3.476684-2.607513 8.691711 0 11.299224 4.345855 3.476684 4.345855 3.476684 9.560882 0 12.168395z m0 0M269.443034 837.011749c-2.607513 3.476684-8.691711 2.607513-13.906737-1.738342-4.345855-4.345855-6.084198-10.430053-2.607513-13.037566 2.607513-3.476684 8.691711-2.607513 13.906737 1.738342 4.345855 3.476684 5.215026 9.560882 2.607513 13.037566z m0 0M308.555733 853.526c-0.869171 4.345855-6.953369 6.084198-13.037566 4.345855-6.084198-1.738342-9.560882-6.953369-8.691711-10.430053 0.869171-4.345855 6.953369-6.084198 13.037566-4.345855 6.084198 1.738342 9.560882 6.084198 8.691711 10.430053z m0 0M351.145116 857.002684c0 4.345855-5.215026 7.82254-11.299224 7.82254-6.084198 0-11.299224-3.476684-11.299224-7.82254s5.215026-7.82254 11.299224-7.82254c6.084198 0 11.299224 3.476684 11.299224 7.82254z m0 0M391.126986 850.049315c0.869171 4.345855-3.476684 8.691711-9.560882 9.560882-6.084198 0.869171-11.299224-1.738342-12.168395-6.084197-0.869171-4.345855 3.476684-8.691711 9.560881-9.560882 6.084198-0.869171 11.299224 1.738342 12.168396 6.084197z m0 0"
          fill="#34C3FF"
          p-id="2717"
        /></svg>
      </a>
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
      const {
        path
      } = this.$route;
      if (path) {
        return path.split('/').slice(-1)[0];
      }
      return this.$route.name;
    },
    currentGithubUrl () {
      const lang = sessionStorage.getItem('lang');
      return `https://github.com/ninecat-ui/ninecat-ui/tree/master/doc/markdown/${this.currentPage}/${lang}/index.md`;
    }
  }
};
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
        color: #455a64;
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
        margin: 10px;
        color: #34495e;
      }

      pre {
        padding: 18px 20px;
        background: #fafafa;
        font-size: 14px;
      }

      code {
        margin: 0;
        padding: 0;
        overflow: auto;
        // color: #314659;
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

      p>code,
      li>code,
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

          +p code {
            margin: 0;
          }

          a {
            color: inherit;
          }
        }
      }
    }

    .github-item{
      position: fixed;
      bottom: 20px;
      right: 30px;
    }
  }
</style>
