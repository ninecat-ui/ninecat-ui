<template>
  <div class="ndoc-header">
    <div class="top">
      <!-- logo -->
      <a
        class="logo"
        :href="headerConfig.logo.href"
      >
        <svg
          t="1585388535760"
          class="icon"
          viewBox="0 0 1325 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2864"
          width="32"
          height="32"
        ><path
          d="M553.714266 853.732863c-45.796784-70.886962-91.420532-141.889281-137.563388-212.545528-5.24875-7.959643-0.8075-12.227857 2.710893-17.591964Q526.836053 461.518591 635.041049 299.268776c48.79607-73.021069 96.438568-146.849638 146.907316-218.601778C820.016221 26.5645 874.695505 0.090036 941.083538 0.090036h371.796058c3.345357 0 6.690714 0.288393 10.036071 0.461429-3.114643 11.535714-11.881785 19.610714-19.379999 27.628035-40.374999 43.54732-79.884819 88.248211-119.683031 132.660709Q1113.196389 239.398421 1042.482463 318.187346C1012.431928 351.92931 981.919965 385.036808 951.696395 418.605736Q893.556397 483.321091 835.35872 548.036445c-29.41607 32.876785-59.178212 65.522855-88.709639 98.053568q-46.142856 51.391605-92.285711 102.84089c-28.839285 32.184642-58.082319 63.965533-86.517854 96.265532-3.63375 4.0375-7.094464 9.459285-14.073571 8.363392"
          fill="#FE9100"
          p-id="2865"
        /><path
          d="M553.714266 853.732863c25.263213-23.071428 45.739106-50.238034 69.214283-74.98214 22.552321-23.417499 43.316606-48.565355 65.003748-72.848033q60.735534-68.003033 121.644103-135.833031c28.493213-31.723213 57.332498-63.100355 85.825711-94.76589q62.465891-69.214283 124.758746-138.947673c28.493213-31.665535 57.332498-63.042676 85.825711-94.76589q61.023926-67.829998 121.701781-135.833031c20.533571-23.071428 41.355534-45.277677 61.946784-68.003033 11.535714-12.400892 22.263928-24.974821 33.395892-37.49107 5.133393 6.286964-1.730357 9.69-4.0375 13.208392q-94.189104 147.080352-189.012672 293.699276Q904.573004 657.625727 679.395869 1007.157858c-2.307143 3.63375-4.787321 7.209821-7.036786 10.901249-4.383571 7.382857-8.8825 8.248035-13.785178 0.461429L553.714266 853.732863"
          fill="#FEC300"
          p-id="2866"
        /><path
          d="M4.498928 9.491643C-5.767857-1.582642 4.0375 0.090036 10.4975 0.090036H373.468737a152.271423 152.271423 0 0 1 142.985173 206.258564c-21.398749 57.678569-45.16232 114.953389-67.829997 172.401244-7.498214 0-12.170178-5.191071-17.303571-9.459285q-95.919461-80.749997-191.954279-160.923209Q130.468924 116.658425 21.168035 25.237892C15.342499 20.277536 10.728214 14.04825 4.498928 9.491643"
          fill="#00AEED"
          p-id="2867"
        /><path
          d="M4.498928 9.491643c18.860892 8.940178 32.64607 24.513392 48.219284 37.548749q198.183564 165.537494 395.905701 331.709452l-78.442855 199.510172-43.085891-66.849462L10.958928 20.623607c-2.307143-3.576071-4.325893-7.440535-6.46-11.131964"
          fill="#41CB31"
          p-id="2868"
        /></svg>
        <div>{{ headerConfig.logo.title }}</div>
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
import 'docsearch.js/dist/cdn/docsearch.min.css';
import docsearch from 'docsearch.js';
import { getLang, setLang } from '../../util/lang';
export default {
  name: 'NHeader',
  props: {
    config: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data: function () {
    const headerConfig = this.config;
    return {
      headerConfig,
      lang: ''
    };
  },
  computed: {
    searchPlaceholder () {
      return this.lang === 'English' ? '搜索文档' : 'Please input';
    }
  },
  mounted () {
    this.setLang();
    docsearch({
      apiKey: 'e3b8bf7a6a9475a23bf57ac66efc6960',
      indexName: 'ninecat-ui',
      inputSelector: '.ndoc-search',
      debug: false // Set debug to true if you want to inspect the dropdown
    });
  },
  methods: {
    setLang () {
      const lang = getLang();
      if (lang === 'zh-CN') {
        this.lang = 'English';
      } else if (lang === 'en-US') {
        this.lang = '中文';
      } else {
        this.lang = 'English';
      }
    },
    changeLang () {
      if (this.lang === 'English') {
        this.lang = '中文';
        setLang('en-US');
      } else {
        this.lang = 'English';
        setLang('zh-CN');
      }
      window.location.reload();
    }
  }
};
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
      margin-top: 10px;
      line-height: 0.5;
      display: block;
      text-decoration: none;
      div{
        color: #fff;
        font-size: 22px;
        height: 32px;
        vertical-align: middle;
        display: inline-block;
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
