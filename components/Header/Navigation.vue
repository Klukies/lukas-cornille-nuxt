<template>
  <nav>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/#about">About</nuxt-link>
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
  @apply hidden text-lg font-bold;
}

@screen md {
  nav {
    @apply block;
  }
}

.nuxt-link-exact-active {
  @apply text-orange-700;
}

a:not(:last-child) {
  @apply mr-10;
}
</style>
