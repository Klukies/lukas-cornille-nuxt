<template>
  <section class="about">
    <span id="about"></span>
    <h2>About Me</h2>
    <Tabs v-model="activeTab">
      <TabPane key="1" tab="About">
        <TabPaneContent>
          <template v-slot:image>
            <img src="~/assets/images/about.png" />
          </template>
          <template v-slot:text>
            <h3>A developer with passion for new technologies</h3>
            <p>
              My name is Lukas, and I love for everything web related. I've written applications in
              several backend and frontend languages/frameworks during my time as a developer, but
              my passion has only grown.
            </p>
            <p>
              On this site, you can find information about me and read some blogposts related to web
              and developer related activities.
            </p>
            <p>Got any questions or want to have a chat? Be sure to contact me!</p>
          </template>
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
import Tabs from 'ant-design-vue/lib/tabs';
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

h3 {
  @apply text-2xl mb-4;
}

p {
  @apply text-lg mb-4;
}

>>> .ant-tabs-tabpane:nth-of-type(even) .tab-content {
  @apply flex-row-reverse;
}

@screen md {
  .about {
    min-height: 75vh;
  }
  h3 {
    @apply mb-8;
  }
}
</style>
