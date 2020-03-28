<template>
  <div
    class="ndoc-nav"
    :style="style"
  >
    <div
      v-for="(item, navIndex) in navConfig"
      :key="navIndex"
      class="item"
    >
      <n-nav-link
        :item="item"
        :base="base"
      />
      <div v-if="item.children">
        <div
          v-for="(navItem, itemIndex) in item.children"
          :key="itemIndex"
        >
          <n-nav-link
            :item="navItem"
            :base="base"
          />
        </div>
      </div>
      <div
        v-for="(group, groupindex) in item.groups"
        v-else-if="item.groups"
        :key="groupindex"
      >
        <div class="group-title">
          {{ group.groupName }}
        </div>
        <div>
          <div
            v-for="(navItem, navItemIndex) in group.list"
            :key="navItemIndex"
            class="subitem"
          >
            <n-nav-link
              :item="navItem"
              :base="base"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nNavLink from '../nNavLink';
export default {
  name: 'NNav',
  components: { nNavLink },
  props: {
    config: {
      type: Array,
      default: () => {
        return [];
      }
    },
    base: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      top: 60,
      bottom: 0,
      navConfig: this.config
    };
  },
  computed: {
    style () {
      return {
        top: this.top + 'px',
        bottom: this.bottom + 'px'
      };
    }
  },
  created () {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  },
  methods: {
    onScroll () {
      const { pageYOffset: offset } = window;
      this.top = Math.max(0, 60 - offset);
    }
  }
};
</script>

<style lang="scss" scoped>
.ndoc-nav {
  left: 0;
  top: 60px;
  bottom: 0;
  z-index: 1;
  position: fixed;
  overflow-y: scroll;
  padding: 25px 0 75px;
  background-color: #fff;
  min-width: 220px;
  max-width: 220px;
  box-shadow: 0 8px 12px #ebedf0;
  border-right: 1px solid #f1f4f8;

  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69, 90, 100, .2)
  }

  .item,.subitem {
    a {
      margin: 0;
      display: block;
      color: #455a64;
      font-size: 18px;
      padding: 10px 10px 10px 30px;
      line-height: 24px;
      transition: all .3s;
      text-decoration:none;
      &.active {
        color: #1989fa;
      }
    }
  }

  .subitem {
    a {
      font-size: 14px;
      &:hover {
        color: #1989fa;
      }
    }

    span {
      font-size: 14px;
    }
  }

  .group-title {
    font-size: 16px;
    line-height: 40px;
    padding-left: 30px;
    color: rgba(69, 90, 100, .6);
  }

  @media (max-width: 1300px) {
    min-width: 220px;
    max-width: 220px;

    .item,
    .subitem {
      a {
        line-height: 22px;
      }
    }

    .subitem {
      a {
        font-size: 13px;
      }
    }
  }
}
</style>
