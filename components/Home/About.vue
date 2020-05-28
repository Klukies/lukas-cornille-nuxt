<template>
  <section class="about">
    <span id="about"></span>
    <h2>About Me</h2>
    <Tabs v-model="activeTab">
      <TabPane v-for="tab in tabs" :key="tab.node.tabtitle" :tab="tab.node.tabtitle">
        <div class="tab-content">
          <div class="tab-content-image">
            <PrismicImage :field="tab.node.image" />
          </div>
          <div class="tab-content-text">
            <PrismicRichText :field="tab.node.title" />
            <PrismicRichText :field="tab.node.text" />
          </div>
        </div>
      </TabPane>
    </Tabs>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import Tabs from 'ant-design-vue/lib/tabs';
import { Tab } from '~/graphql/types';
const { TabPane } = Tabs;

export default Vue.extend({
  components: { Tabs, TabPane },
  props: {
    tabs: {
      type: Array as () => Tab[],
      required: true,
    },
  },
  data() {
    return {
      activeTab: 'About',
    };
  },
});
</script>

<style scoped>
#about {
  @apply relative;
  top: -80px;
}

.about {
  @apply bg-gray-800 z-20 pt-8;
  min-height: calc(75vh + 2rem);
}

h2 {
  @apply text-6xl font-bold mb-8;
}

>>> h3 {
  @apply text-2xl mb-4;
}

>>> p {
  @apply text-lg mb-4;
}

>>> .ant-tabs-tabpane:nth-of-type(even) .tab-content {
  @apply flex-row-reverse;
}

@screen md {
  .about {
    min-height: 75vh;
  }
  >>> h3 {
    @apply mb-8;
  }
}

.tab-content-image {
  @apply w-1/3 m-auto;
}

@screen lg {
  .tab-content {
    @apply flex;
  }

  .tab-content-image,
  .tab-content-text {
    @apply w-1/2 p-8;
  }

  .tab-content-image {
    @apply block;
  }
}
</style>
