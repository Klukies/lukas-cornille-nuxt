<template>
  <nuxt-link to="/">
    <span>&#60;/&#62;</span>
    Lukas
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {},
  data() {
    return {};
  },
});
</script>

<style scoped>
a {
  @apply flex items-center text-3xl text-white;
}

a span {
  @apply text-center block leading-loose w-12 mr-2 text-2xl bg-orange-700 tracking-tighter;
}
</style>
