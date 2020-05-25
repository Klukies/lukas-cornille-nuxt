<template>
  <section class="about">
    <h2>About Me</h2>
    <Tabs v-model="activeTab">
      <TabPane key="1" tab="About">
        <TabPaneContent>
          <template v-slot:image>
            <img src="~/assets/images/about.png" />
          </template>
          <template v-slot:text>some text</template>
        </TabPaneContent>
      </TabPane>
      <TabPane key="2" tab="Skills">
        <TabPaneContent>
          <template v-slot:image>
            <img src="~/assets/images/skills.png" />
          </template>
          <template v-slot:text>some text</template>
        </TabPaneContent>
      </TabPane>
      <TabPane key="3" tab="Editor">
        <TabPaneContent>
          <template v-slot:image>
            <img src="~/assets/images/editor.png" />
          </template>
          <template v-slot:text>some text</template>
        </TabPaneContent>
      </TabPane>
      <TabPane key="4" tab="How?">
        <TabPaneContent>
          <template v-slot:image>
            <img src="~/assets/images/how.png" />
          </template>
          <template v-slot:text>some text</template>
        </TabPaneContent>
      </TabPane>
    </Tabs>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import { Tabs } from 'ant-design-vue/lib';
import TabPaneContent from './TabPaneContent.vue';
const { TabPane } = Tabs;

export default Vue.extend({
  components: { Tabs, TabPane, TabPaneContent },
  data() {
    return {
      activeTab: '1',
    };
  },
});
</script>

<style scoped>
.about {
  @apply bg-gray-800 z-20 py-24;
  height: 75vh;
}

h2 {
  @apply text-6xl font-bold mb-10;
}

>>> .ant-tabs-tabpane:nth-of-type(even) .tab-content {
  @apply flex-row-reverse;
}
</style>
