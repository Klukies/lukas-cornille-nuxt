<template>
  <section class="about">
    <h2>About Me</h2>
    <Tabs v-model="activeTab">
      <TabPane v-for="tab in tabs" :key="tab.node.tabtitle" :tab="tab.node.tabtitle">
        <div class="tab-content">
          <div class="tab-content-image">
            <img v-lazy-load :data-src="tab.node.image.url" :alt="tab.node.image.alt" />
          </div>
          <div class="tab-content-text">
            <h3>{{ tab.node.title[0].text }}</h3>
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

>>> strong {
  @apply text-orange-700;
}

>>> ul li {
  @apply relative pl-8;
}

>>> ul li::before {
  @apply inline-block absolute rounded-full border-2 border-blue-500 border-solid;
  content: '';
  width: 20px;
  height: 20px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-image: url('~assets/icons/check-background.svg?inline');
}

>>> a {
  @apply text-orange-700 underline;
}

>>> .ant-tabs-tabpane:nth-of-type(even) .tab-content {
  @apply flex-row-reverse;
}

>>> .tab-content {
  @apply max-w-xl mx-auto;
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
    @apply flex max-w-full;
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
