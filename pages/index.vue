<template>
  <main>
    <Hero />
    <About />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import About from '../components/Home/About.vue';
import Hero from '../components/Home/Hero.vue';

export default Vue.extend({
  components: { Hero, About },
});
</script>

<style scoped>
>>> .ant-tabs {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  overflow: hidden;
  zoom: 1;
}
>>> .ant-tabs-ink-bar {
  position: absolute;
  bottom: 1px;
  left: 0;
  z-index: 1;
  box-sizing: border-box;
  width: 0;
  height: 2px;
  background-color: #d36135;
  transform-origin: 0 0;
}
>>> .ant-tabs-bar {
  margin: 0 0 2rem 0;
  border-bottom: 1px solid #e8e8e8;
  outline: none;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
>>> .ant-tabs-nav-container {
  position: relative;
  box-sizing: border-box;
  margin-bottom: -1px;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.5;
  white-space: nowrap;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  zoom: 1;
}
>>> .ant-tabs-tab-prev,
>>> .ant-tabs-tab-next {
  display: none;
}
>>> .ant-tabs-nav-wrap {
  margin-bottom: -1px;
  overflow: hidden;
}
>>> .ant-tabs-nav-scroll {
  overflow: hidden;
  white-space: nowrap;
}
>>> .ant-tabs-nav {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding-left: 0;
  list-style: none;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
>>> .ant-tabs-nav .ant-tabs-tab {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 100%;
  padding: 12px 16px;
  font-size: 1.5rem;
  text-decoration: none;
  text-align: center;
  width: 25%;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  color: #718096;
}
>>> .ant-tabs-nav .ant-tabs-tab:last-child {
  margin-right: 0;
}
>>> .ant-tabs-nav .ant-tabs-tab:hover {
  color: #e2e8f0;
}
>>> .ant-tabs-nav .ant-tabs-tab:active {
  color: #d36135;
}
>>> .ant-tabs-nav .ant-tabs-tab .anticon {
  margin-right: 8px;
}
>>> .ant-tabs-nav .ant-tabs-tab-active {
  color: #e2e8f0;
}
>>> .ant-tabs .ant-tabs-top-content {
  width: 100%;
}
>>> .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane {
  flex-shrink: 0;
  width: 100%;
  -webkit-backface-visibility: hidden;
  opacity: 1;
  transition: opacity 0.3s;
}
>>> .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane-inactive {
  height: 0;
  padding: 0 !important;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
}
>>> .ant-tabs .ant-tabs-top-content.ant-tabs-content-animated {
  display: flex;
  flex-direction: row;
  will-change: margin-left;
}
>>> .ant-tabs-top .ant-tabs-ink-bar-animated {
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    width 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
