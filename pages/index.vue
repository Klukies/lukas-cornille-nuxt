<template>
  <main>
    <Hero />
    <About :tabs="tabs" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import About from '~/components/Home/About.vue';
import Hero from '~/components/Home/Hero.vue';
import { prismic } from '~/graphql/prismic';
import { GET_ABOUT_TABS } from '~/graphql/home';
import { Tabs } from '~/graphql/types';

export default Vue.extend({
  components: { Hero, About },
  async asyncData() {
    const { data }: Tabs = await prismic.query({ query: GET_ABOUT_TABS });
    return { tabs: data.allAbout_tabs.edges };
  },
});
</script>

<style scoped>
>>> .ant-tabs {
  @apply relative overflow-hidden m-0 p-0 list-none;
}
>>> .ant-tabs-ink-bar {
  @apply absolute left-0 w-0 bg-orange-600;
  bottom: 1px;
  z-index: 1;
  height: 2px;
  transform-origin: 0 0;
}
>>> .ant-tabs-bar {
  @apply mb-8 border-b border-solid border-gray-200 outline-none;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
>>> .ant-tabs-nav-container {
  @apply relative overflow-hidden whitespace-no-wrap;
  margin-bottom: -1px;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
>>> .ant-tabs-tab-prev,
>>> .ant-tabs-tab-next {
  @apply hidden;
}
>>> .ant-tabs-nav-wrap {
  @apply overflow-hidden;
  margin-bottom: -1px;
}
>>> .ant-tabs-nav-scroll {
  @apply overflow-hidden whitespace-no-wrap;
}
>>> .ant-tabs-nav {
  @apply relative m-0 pl-0 list-none;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
>>> .ant-tabs-nav .ant-tabs-tab {
  @apply relative inline-block h-full text-2xl text-center w-1/4 font-medium cursor-pointer text-gray-500 py-3;
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

@media screen and (min-width: 768px) {
  >>> .ant-tabs-nav .ant-tabs-tab {
    @apply px-4;
  }
}

>>> .ant-tabs-nav .ant-tabs-tab:last-child {
  @apply mr-0;
}
>>> .ant-tabs-nav .ant-tabs-tab:hover,
>>> .ant-tabs-nav .ant-tabs-tab-active {
  @apply text-white;
}
>>> .ant-tabs-nav .ant-tabs-tab:active {
  @apply text-orange-600;
}
>>> .ant-tabs-nav .ant-tabs-tab .anticon {
  margin-right: 8px;
}
>>> .ant-tabs .ant-tabs-top-content {
  @apply w-full;
}
>>> .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane {
  @apply flex-shrink-0 w-full opacity-100;
  transition: opacity 0.3s;
}
>>> .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane-inactive {
  @apply h-0 p-0 overflow-hidden opacity-0 pointer-events-none;
}
>>> .ant-tabs .ant-tabs-top-content.ant-tabs-content-animated {
  @apply flex flex-row;
  will-change: margin-left;
}
>>> .ant-tabs-top .ant-tabs-ink-bar-animated {
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    width 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
