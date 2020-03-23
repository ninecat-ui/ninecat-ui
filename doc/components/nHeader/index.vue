<template>
  <div class="ndoc-header">
    <div class="top">
      <!-- logo -->
      <a
        class="logo"
        :href="headerConfig.logo.href"
      >
        <img :src="headerConfig.logo.image">
        <span>{{ headerConfig.logo.title }}</span>
      </a>
      <!-- search -->
      <input
        class="ndoc-search"
        :placeholder="searchPlaceholder"
      >
      <ul class="nav">
        <li class="item">
          <span
            class="cube lang"
            @click="changeLang"
          >
            {{ lang }}
          </span>
        </li>
        <li class="item">
          <a
            :href="headerConfig.githubLink"
            target="_blank"
          >
            <svg
              height="28"
              width="28"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
              class="github-icon"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import 'docsearch.js/dist/cdn/docsearch.min.css'
import docsearch from 'docsearch.js'
import { getLang, setLang } from '../../util/lang'
export default {
  name: 'NHeader',
  props: {
    config: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data: function () {
    const headerConfig = this.config
    return {
      headerConfig,
      lang: ''
    }
  },
  computed: {
    searchPlaceholder () {
      return this.lang === 'English' ? '搜索文档' : 'Please input'
    }
  },
  mounted () {
    this.setLang()
    docsearch({
      apiKey: 'e3b8bf7a6a9475a23bf57ac66efc6960',
      indexName: 'ninecat-ui',
      inputSelector: '.ndoc-search',
      debug: false // Set debug to true if you want to inspect the dropdown
    })
  },
  methods: {
    setLang () {
      const lang = getLang()
      if (lang === 'zh-CN') {
        this.lang = 'English'
      } else if (lang === 'en-US') {
        this.lang = '中文'
      } else {
        this.lang = 'English'
      }
    },
    changeLang () {
      if (this.lang === 'English') {
        this.lang = '中文'
        setLang('en-US')
      } else {
        this.lang = 'English'
        setLang('zh-CN')
      }
      window.location.reload()
    }
  }
}
</script>

<style lang="scss">
.ndoc-header{
  width: 100%;
  box-shadow: 0 4px 12px #ebedf0;
  .top{
    display: flex;
    align-items: center;
    background-color: #404040;
    padding: 0 30px;
    height: 60px;
    line-height: 60px;
    .logo{
      display: block;
      text-decoration: none;
      img,span{
        display: inline-block;
        vertical-align: middle;
      }
      img {
        width: 26px;
        margin-right: 5px;
      }
      span {
        color: #fff;
        font-size: 22px;
      }
    }
    .ndoc-search{
      height: 60px;
      width: 200px;
      border: none;
      color: #fff;
      font-size: 14px;
      // left: 140px;
      background-color: transparent;
      &:focus {
        outline: none;
      }
      &::placeholder {
        opacity: 0.7;
        color: #fff;
      }
    }
    .algolia-autocomplete{
      left: 140px;
    }
    .nav{
      flex: 1;
      text-align: right;
      li{
        display: inline-block;
        position: relative;
        vertical-align: middle;
      }
      .item{
        margin: 0 10px;
      }
      .cube {
        padding-right: 20px;
        width: 50px;
        position: relative;
        cursor: pointer;
        padding: 0 7px;
        font-size: 14px;
        line-height: 24px;
        display: block;
        border-radius: 3px;
        text-align: center;
        color: #fff;
        border: 1px solid hsla(0,0%,100%,.7);
        font-family: Helvetica Neue,Arial,sans-serif;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
      }
      .version{
        &:after{
          position: absolute;
          content: "";
          top: 7px;
          right: 7px;
          width: 5px;
          height: 5px;
          border: 1px solid;
          color: hsla(0,0%,100%,.9);
          border-color: transparent transparent currentColor currentColor;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
      }
      .github-icon {
        fill: #fff;
        display: block;
        transition: 0.3s ease-in-out;
      }
      .ndoc-dropdown{
        .enter,
        .leave-active {
          opacity: 0;
          transform: scaleY(0);
        }
      }
    }
  }
}
</style>
