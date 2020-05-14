<template>
  <nav>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/blog">Blog</nuxt-link>
    <LetsTalk @openContactModal="$emit('openContactModal')" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import LetsTalk from './LetsTalk.vue';

export default Vue.extend({
  components: { LetsTalk },
  data() {
    return {};
  },
});
</script>

<style scoped>
nav {
  @apply text-lg font-bold;
}

.nuxt-link-active {
  @apply text-orange-700;
}

a:not(:last-child) {
  @apply mr-10;
}
</style>
