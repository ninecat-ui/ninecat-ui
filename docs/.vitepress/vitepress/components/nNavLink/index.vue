<template>
  <a
    :href="getLink(item)"
    v-if="item.path"
    active-class="active"
  >
    {{ name[0] }} <span>{{ name.slice(1).join(" ") }}</span>
  </a>
  <a v-else-if="item.link" :href="item.link">
    {{ name[0] }} <span>{{ name.slice(1).join(" ") }}</span>
  </a>
  <a v-else class="title">
    {{ name[0] }} <span>{{ name.slice(1).join(" ") }}</span>
  </a>
</template>

<script>
import { inBrowser,useData } from "vitepress";
export default {
  name: "NNavLink",

  props: {
    base: {
      type: String,
      default: "",
    },
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  computed: {
    name() {
      return (this.item.title || this.item.name).split(" ");
    },
  },

  methods: {
    getLink(a) {
      console.log(a)
      const { theme } = useData()
      console.log(theme)
      if (!inBrowser) return "/";
      // const existLangIndex = theme.value.langs.findIndex((lang) =>
      //   window?.location?.pathname.startsWith(`/${lang}`)
      // );
      // console.log(theme) 

      // return existLangIndex === -1
      //   ? "/"
      //   : `/${theme.value.langs[existLangIndex]}/`;
      return `/zh-CN${a.path}/`
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-weight: 700;
  font-size: 16px;
}
</style>
